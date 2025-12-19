// components/HeroBackground.tsx
"use client";
import { useEffect, useRef } from "react";

const BackgroundHero = () => {
  const animationRef = useRef(null);
  const configRef = useRef({
    speed: 0.2,
    coreLength: 300,
    glowLength: 300,
    paths: [
      {
        coreId: "core1",
        glowId: "glow1",
        groupId: "lightGroup1",
        path: "M321 345V536.005C321 554.57 328.375 572.375 341.503 585.503L410.497 654.497C423.625 667.625 431 685.43 431 703.995V1108",
      },
      {
        coreId: "core2",
        glowId: "glow2",
        groupId: "lightGroup2",
        path: "M1566 22.5V117.505C1566 136.07 1573.37 153.875 1586.5 167.003L1727 307.497C1740.13 320.625 1747.5 338.43 1747.5 356.995V758.505C1747.5 777.07 1740.13 794.875 1727 808.003L1675 859.997C1661.87 873.125 1654.5 890.93 1654.5 909.495V949.5",
      },
      {
        coreId: "core3",
        glowId: "glow3",
        groupId: "lightGroup3",
        path: "M1565.5 -138V210.505C1565.5 229.07 1558.13 246.875 1545 260.003L1493 311.997C1479.87 325.125 1472.5 342.93 1472.5 361.495V474.505C1472.5 493.07 1479.87 510.875 1493 524.003L1633 663.997C1646.13 677.125 1653.5 694.93 1653.5 713.495V1217",
      },
      {
        coreId: "core4",
        glowId: "glow4",
        groupId: "lightGroup4",
        path: "M321 -11V425.505C321 444.07 313.625 461.875 300.497 475.003L224.003 551.497C210.875 564.625 203.5 582.43 203.5 600.995V1091",
      },
    ],
  });

  // Hitung panjang path
  const getPathLength = (path) => {
    const temp = document.createElementNS("http://www.w3.org/2000/svg", "path");
    temp.setAttribute("d", path);
    return temp.getTotalLength();
  };

  // Easing function untuk gerakan lebih halus
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Setup animasi
  const setupAnimation = () => {
    configRef.current.paths.forEach((pathData) => {
      const coreElement = document.getElementById(pathData.coreId);
      const glowElement = document.getElementById(pathData.glowId);
      const pathLength = getPathLength(pathData.path);

      // Set path data untuk core dan glow
      coreElement.setAttribute("d", pathData.path);
      glowElement.setAttribute("d", pathData.path);

      // Setup stroke dash dengan panjang berbeda
      coreElement.style.strokeDasharray = `${configRef.current.coreLength} ${pathLength}`;
      glowElement.style.strokeDasharray = `${configRef.current.glowLength} ${pathLength}`;

      // Simpan data untuk animasi
      pathData.coreElement = coreElement;
      pathData.glowElement = glowElement;
      pathData.length = pathLength;
      pathData.progress = 0;
    });

    startAnimation();
  };

  // Animasi utama
  const startAnimation = () => {
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      configRef.current.paths.forEach((pathData) => {
        if (!pathData.coreElement || !pathData.glowElement || pathData.length === undefined || pathData.progress === undefined)
          return;

        // Update progress
        pathData.progress += delta * configRef.current.speed;

        if (pathData.progress > 1) {
          pathData.progress = 0;
        }

        // Hitung offset untuk core dan glow
        const coreOffset = -pathData.progress * (pathData.length + configRef.current.coreLength);
        const glowOffset = -pathData.progress * (pathData.length + configRef.current.glowLength);

        pathData.coreElement.style.strokeDashoffset = coreOffset.toString();
        pathData.glowElement.style.strokeDashoffset = glowOffset.toString();

        // Efek opacity yang halus dengan easing
        const easedProgress = easeInOutCubic(pathData.progress);
        const opacity = 0.7 + 0.3 * Math.sin(easedProgress * Math.PI * 2);

        pathData.coreElement.style.opacity = opacity.toString();
        pathData.glowElement.style.opacity = (opacity * 0.6).toString();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Mulai ketika komponen siap
    const timer = setTimeout(setupAnimation, 100);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-w-full flex min-h-screen overflow-hidden justify-center">
      <svg
        viewBox="0 0 1920 1080"
        fill="none"
        className="hidden xl:block 2xl:w-full 2xl:h-full w-[1536px] h-[864px] min-w-full min-h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="clip0_9_365">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>

          {/* Glow effect untuk core */}
          <filter id="softGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Blur effect untuk glow (lebih halus) */}
          <filter id="blurEffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          {/* Gradient untuk efek yang lebih smooth */}
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2196f3" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#64b5f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#2196f3" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="greenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4caf50" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#81c784" stopOpacity="1" />
            <stop offset="100%" stopColor="#4caf50" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <g clipPath="url(#clip0_9_365)">
          <rect width="1920" height="1080" fill="#f9f9f9" />

          {/* Garis track */}
          <path
            className="track-line dashed-line"
            d="M321 345V536.005C321 554.57 328.375 572.375 341.503 585.503L410.497 654.497C423.625 667.625 431 685.43 431 703.995V1108"
          />
          <path
            className="track-line dashed-line"
            d="M1566 22.5V117.505C1566 136.07 1573.37 153.875 1586.5 167.003L1727 307.497C1740.13 320.625 1747.5 338.43 1747.5 356.995V758.505C1747.5 777.07 1740.13 794.875 1727 808.003L1675 859.997C1661.87 873.125 1654.5 890.93 1654.5 909.495V949.5"
          />
          <path
            className="track-line"
            d="M1565.5 -138V210.505C1565.5 229.07 1558.13 246.875 1545 260.003L1493 311.997C1479.87 325.125 1472.5 342.93 1472.5 361.495V474.505C1472.5 493.07 1479.87 510.875 1493 524.003L1633 663.997C1646.13 677.125 1653.5 694.93 1653.5 713.495V1217"
          />
          <path
            className="track-line"
            d="M321 -11V425.505C321 444.07 313.625 461.875 300.497 475.003L224.003 551.497C210.875 564.625 203.5 582.43 203.5 600.995V1091"
          />

          {/* Cahaya dengan dual layer untuk efek blur halus */}
          <g id="lightGroup1">
            <path className="light-glow blue-light" id="glow1" stroke="url(#blueGlow)" />
            <path className="light-core blue-light" id="core1" />
          </g>
          <g id="lightGroup2">
            <path className="light-glow green-light" id="glow2" stroke="url(#greenGlow)" />
            <path className="light-core green-light" id="core2" />
          </g>
          <g id="lightGroup3">
            <path className="light-glow blue-light" id="glow3" stroke="url(#blueGlow)" />
            <path className="light-core blue-light" id="core3" />
          </g>
          <g id="lightGroup4">
            <path className="light-glow green-light" id="glow4" stroke="url(#greenGlow)" />
            <path className="light-core green-light" id="core4" />
          </g>
        </g>
      </svg>

      <style>{`
        /* SVG Styling */
        .track-line {
          fill: none;
          stroke: rgba(0, 0, 0, 0.1);
          stroke-width: 2;
        }

        .dashed-line {
          stroke-dasharray: 10 10;
        }

        /* Cahaya dengan blur halus */
        .light-core {
          fill: none;
          stroke-linecap: round;
          stroke-width: 4;
          filter: url(#softGlow);
        }

        .light-glow {
          fill: none;
          stroke-linecap: round;
          stroke-width: 8;
          opacity: 0.6;
          filter: url(#blurEffect);
        }

        .blue-light {
          stroke: #90bfe5;
        }

        .green-light {
          stroke: #8fef95;
        }
      `}</style>
      <div className="h-40 bg-linear-to-b from-transparent via-white/60 to-white w-full bottom-0 absolute"></div>
    </div>
  );
};

export default BackgroundHero;
