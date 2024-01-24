"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";

const ParticlesBg = ({ option }: { option: any }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={option}
    />
  );
};

export default ParticlesBg;
