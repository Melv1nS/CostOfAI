import { HardwareSpec } from '../types';

export const HARDWARE_OPTIONS: HardwareSpec[] = [
  {
    name: "NVIDIA A100",
    tdp: 400,
    inferenceSpeed: 1000,
    memoryPower: 95,
    idlePower: 100,
    memoryBandwidth: 1555,
    yearReleased: 2020,
    performanceDegradation: 0.95
  },
  {
    name: "NVIDIA H200",
    tdp: 700,
    inferenceSpeed: 2000,
    memoryPower: 130,
    idlePower: 150,
    memoryBandwidth: 4800,
    yearReleased: 2023,
    performanceDegradation: 1.0
  },
  {
    name: "NVIDIA H100",
    tdp: 700,
    inferenceSpeed: 1900,
    memoryPower: 120,
    idlePower: 150,
    memoryBandwidth: 3350,
    yearReleased: 2022,
    performanceDegradation: 1.0
  },
  {
    name: "NVIDIA A40",
    tdp: 300,
    inferenceSpeed: 600,
    memoryPower: 70,
    idlePower: 60,
    memoryBandwidth: 696,
    yearReleased: 2020,
    performanceDegradation: 0.95
  },
  {
    name: "NVIDIA A30",
    tdp: 165,
    inferenceSpeed: 400,
    memoryPower: 50,
    idlePower: 40,
    memoryBandwidth: 933,
    yearReleased: 2021,
    performanceDegradation: 0.97
  },
  {
    name: "NVIDIA T4",
    tdp: 70,
    inferenceSpeed: 500,
    memoryPower: 25,
    idlePower: 15,
    memoryBandwidth: 320,
    yearReleased: 2018,
    performanceDegradation: 0.9
  },
  {
    name: "NVIDIA L4",
    tdp: 72,
    inferenceSpeed: 600,
    memoryPower: 30,
    idlePower: 20,
    memoryBandwidth: 408,
    yearReleased: 2023,
    performanceDegradation: 1.0
  },
  {
    name: "Google TPU v4",
    tdp: 175,
    inferenceSpeed: 1200,
    memoryPower: 45,
    idlePower: 40,
    memoryBandwidth: 1200,
    yearReleased: 2022,
    performanceDegradation: 0.98
  },
  {
    name: "AMD MI250X",
    tdp: 560,
    inferenceSpeed: 900,
    memoryPower: 100,
    idlePower: 120,
    memoryBandwidth: 3200,
    yearReleased: 2021,
    performanceDegradation: 0.97
  },
  {
    name: "AMD MI210",
    tdp: 300,
    inferenceSpeed: 700,
    memoryPower: 80,
    idlePower: 70,
    memoryBandwidth: 1600,
    yearReleased: 2021,
    performanceDegradation: 0.97
  },
  {
    name: "AWS Trainium2",
    tdp: 375,
    inferenceSpeed: 800,
    memoryPower: 85,
    idlePower: 70,
    memoryBandwidth: 820,
    yearReleased: 2023,
    performanceDegradation: 1.0
  },
  {
    name: "AWS Inferentia2",
    tdp: 200,
    inferenceSpeed: 1100,
    memoryPower: 60,
    idlePower: 45,
    memoryBandwidth: 750,
    yearReleased: 2023,
    performanceDegradation: 1.0
  },
  {
    name: "AMD MI300X",
    tdp: 750,
    inferenceSpeed: 1800,
    memoryPower: 140,
    idlePower: 160,
    memoryBandwidth: 5300,
    yearReleased: 2023,
    performanceDegradation: 1.0
  }
];