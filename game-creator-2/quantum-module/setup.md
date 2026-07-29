# Setup

Use the dependency order supplied with your private entitlement:

1. Create or open a supported Unity 6 project.
2. Install Game Creator Core and each required Game Creator add-on.
3. Import Photon Quantum **3.0.12 Stable Build 2123** from your Photon account.
4. Import Quantum Core for Game Creator 2.
5. Import each Quantum add-on package.
6. Run Quantum code generation and resolve every compile error before opening an
   example scene.

Do not install Quantum 3.1 preview over this product family. Do not copy a root
`Input`, command registry, event bridge, or catalog allocation from an add-on;
those contracts belong to Quantum Core.

The compatibility descriptor delivered with a release lists its exact Quantum
Core commit and proven Unity editors. An editor absent from that descriptor is
not supported merely because another module compiles there.
