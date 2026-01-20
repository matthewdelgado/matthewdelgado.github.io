---
title: "Morse Code Beeper"
description: "Wireless communication system using Arduino microcontrollers with SPI-based transceiver modules for peer-to-peer messaging."
techStack: ["Arduino", "C++", "SPI Protocol", "RF Transceivers"]
date: 2022-12-01
featured: true
---

## Overview

A complete embedded systems project enabling wireless peer-to-peer communication between multiple Arduino microcontrollers using Morse code as the communication medium.

## Key Features

- **Wireless SPI Communication**: Robust wireless communication using SPI protocol with RF transceiver modules.

- **Multi-Device Network**: Support for multiple Arduino devices communicating within the same network, each with unique identifiers.

- **UID-Based Addressing**: Phone number-like addressing system where each Arduino has a unique identifier (UID), allowing targeted message delivery to specific devices.

- **Morse Code Interface**: Intuitive input/output using Morse code patterns, bridging classic communication methods with modern embedded systems.

## Technical Implementation

The system architecture includes:

- **Hardware**: Arduino microcontrollers paired with nRF24L01 transceiver modules
- **Protocol**: Custom SPI-based communication protocol for reliable data transfer
- **Addressing**: Unique identifier system for device targeting similar to phone numbers
- **Software**: C++ firmware with interrupt-driven I/O for responsive performance

## Learning Outcomes

This project provided hands-on experience with:
- Embedded systems programming in C++
- Wireless communication protocols
- SPI interface implementation
- Multi-device network architecture
- Real-time signal processing
