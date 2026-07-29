# Remote Procedure Calls

Fusion Module exposes three visual-scripting RPC instructions:

* **RPC Actions**
* **RPC Conditions**
* **RPC Trigger**

The referenced Actions, Conditions, or Trigger GameObject must have a Fusion
`NetworkObject`.

## RPC targets

| Target | Receiver |
| --- | --- |
| **All** | Every eligible peer, including the sender where Fusion permits it. |
| **Proxies** | Peers that have neither Input Authority nor State Authority. |
| **InputAuthority** | The peer with Input Authority for the object. |
| **StateAuthority** | The peer with State Authority for the object. |

Authority is evaluated for the target NetworkObject, not for an unrelated
Character or scene object.

## Cached state

Enable **Cache State** only for a replayable state transition that a late
joiner needs. Remove it with:

* **Remove Cached Actions RPC**
* **Remove Cached Conditions RPC**
* **Remove Cached Trigger RPC**

Cached RPCs are not a replacement for Networked properties. Store durable
state in Networked state or networked variables, then use the RPC for the
presentation that follows.

## Prediction rule

RPC is a reliable request/control fallback. Do not use RPC-only transport for
player movement, fire, attacks, blocking, charged abilities, or other input
that must survive Fusion prediction, rollback, and resimulation. Those
commands belong in Core's versioned
[network-input extension](references/compatibility.md#network-input-extension).

Invoke irreversible effects such as audio, analytics, or one-shot UI only on a
forward simulation tick. Keep authoritative gameplay changes deterministic
and idempotent.
