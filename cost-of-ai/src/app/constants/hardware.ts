import { HardwareSpec } from '../types';

export const HARDWARE_OPTIONS: HardwareSpec[] = [
  {
    name: "NVIDIA A100",
    tdp: 400,
    inferenceSpeed: 1000,
    memoryPower: 95,
    idlePower: 100
  },
  {
    name: "NVIDIA H100",
    tdp: 700,
    inferenceSpeed: 1900,
    memoryPower: 120,
    idlePower: 150
  },
  {
    name: "NVIDIA A40",
    tdp: 300,
    inferenceSpeed: 600,
    memoryPower: 70,
    idlePower: 60
  },
  {
    name: "NVIDIA A30",
    tdp: 165,
    inferenceSpeed: 400,
    memoryPower: 50,
    idlePower: 40
  },
  {
    name: "NVIDIA T4",
    tdp: 70,
    inferenceSpeed: 500,
    memoryPower: 25,
    idlePower: 15
  },
  {
    name: "NVIDIA L4",
    tdp: 72,
    inferenceSpeed: 600,
    memoryPower: 30,
    idlePower: 20
  },
  {
    name: "Google TPU v4",
    tdp: 175,
    inferenceSpeed: 1200,
    memoryPower: 45,
    idlePower: 40
  },
  {
    name: "AMD MI250X",
    tdp: 560,
    inferenceSpeed: 900,
    memoryPower: 100,
    idlePower: 120
  },
  {
    name: "AMD MI210",
    tdp: 300,
    inferenceSpeed: 700,
    memoryPower: 80,
    idlePower: 70
  }
];