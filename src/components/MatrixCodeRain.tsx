import { useEffect, useRef } from "react";

const color = "#48E054";

type Pixel = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxOpacity: number;
  life: number;
  totalLife: number;
};

type Cluster = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const MatrixCodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const resizeCanvas = () => {
      const width = document.documentElement.clientWidth || window.innerWidth;
      const height =
        document.documentElement.clientHeight || window.innerHeight;

      if (canvas.width !== width) canvas.width = width;
      if (canvas.height !== height) canvas.height = height;
    };

    resizeCanvas();

    const clusterCount = () =>
      Math.max(6, Math.floor((canvas.width * canvas.height) / 170000));

    // Places clusters on a jittered grid so they land in spread-out spots
    // across the whole page instead of clumping together by pure chance.
    const spawnClusters = (): Cluster[] => {
      const count = clusterCount();
      const cols = Math.max(1, Math.round(Math.sqrt((count * canvas.width) / canvas.height)));
      const rows = Math.max(1, Math.ceil(count / cols));
      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;

      return Array.from({ length: count }, (_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.03 + Math.random() * 0.08;

        return {
          x: cellWidth * (col + 0.5) + (Math.random() - 0.5) * cellWidth * 0.7,
          y: cellHeight * (row + 0.5) + (Math.random() - 0.5) * cellHeight * 0.7,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 60 + Math.random() * 90,
        };
      });
    };

    let clusters: Cluster[] = spawnClusters();

    const spawnPixel = (): Pixel => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.05 + Math.random() * 0.2;
      const cluster = clusters[Math.floor(Math.random() * clusters.length)];

      // sum of two uniforms -> triangular distribution, biases pixels toward the cluster center
      const offsetAngle = Math.random() * Math.PI * 2;
      const offsetRadius =
        ((Math.random() + Math.random()) / 2) * cluster.radius;

      return {
        x: cluster.x + Math.cos(offsetAngle) * offsetRadius,
        y: cluster.y + Math.sin(offsetAngle) * offsetRadius,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 3,
        maxOpacity: 0.2 + Math.random() * 0.4,
        life: 0,
        totalLife: 300 + Math.random() * 500,
      };
    };

    const pixelCount = () =>
      Math.max(
        20,
        Math.min(70, Math.floor((canvas.width * canvas.height) / 35000))
      );

    let pixels: Pixel[] = Array.from({ length: pixelCount() }, spawnPixel);

    const wrap = (value: number, max: number) => {
      if (value < 0) return max;
      if (value > max) return 0;
      return value;
    };

    const draw = () => {
      // Re-applied every frame: assigning canvas.width/height (on resize)
      // resets these context properties back to their defaults.
      context.fillStyle = color;
      context.shadowColor = color;
      context.shadowBlur = 4;

      context.clearRect(0, 0, canvas.width, canvas.height);

      clusters.forEach((cluster) => {
        cluster.x = wrap(cluster.x + cluster.vx, canvas.width);
        cluster.y = wrap(cluster.y + cluster.vy, canvas.height);
      });

      pixels.forEach((pixel, index) => {
        pixel.life++;

        const progress = pixel.life / pixel.totalLife;

        if (progress >= 1) {
          pixels[index] = spawnPixel();
          return;
        }

        let envelope = 1;
        if (progress < 0.2) envelope = progress / 0.2;
        else if (progress > 0.8) envelope = (1 - progress) / 0.2;

        pixel.x = wrap(pixel.x + pixel.vx, canvas.width);
        pixel.y = wrap(pixel.y + pixel.vy, canvas.height);

        context.globalAlpha = envelope * pixel.maxOpacity;
        context.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
      });

      context.globalAlpha = 1;
    };

    const interval = window.setInterval(draw, 33);

    const handleResize = () => {
      resizeCanvas();
      clusters = spawnClusters();
      pixels = Array.from({ length: pixelCount() }, spawnPixel);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("fullscreenchange", handleResize);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-screen w-screen bg-black -z-10"
    />
  );
};

export default MatrixCodeRain;
