# Sessions

## Start or join

Use the **Start Game** instruction to start a new Fusion runner or join an
existing session. Configure:

* **Game Mode** — use Shared, Host, Client, Server, or Single Player according
  to the topology.
* **Session Name** — clients must use the same name as the host/session.
* **Scene** — the network scene to load.
* **Player Count** — the session capacity.
* **Visibility and Open state** — whether the session is listed and joinable.
* **Region, authentication, session properties, and connection token** where
  required by the project.

Use **On Game Starting**, **On Game Started**, **On Game Failed**, and
**On Game Canceled** for the asynchronous lifecycle. Use **Shutdown Game** to
stop or cancel the runner.

## Lobby and session browser

Use **Join Session Lobby** before displaying public sessions. The lifecycle is
reported by **On Lobby Starting**, **On Lobby Started**, **On Lobby Failed**,
and **On Lobby Canceled**. **On Session List Updated** fires when the current
list changes.

The Session List UI displays visible sessions. A listed session may still
reject a join if it closes or fills between discovery and the join request.

## Spawn the player

Wait for **On Scene Load Done**, then use **Spawn Player**. In Host/Client mode,
the Host or Server spawns the avatar and assigns Input Authority. In Shared
Mode, each player normally spawns the avatar for which it has State Authority.

Do not spawn the same player from both a scene event and a join callback.
Handle **On Player Spawned**, **On Player Despawned**, **On Player Joined**, and
**On Player Left** as separate events: a peer can join before its avatar is
ready, and its avatar can despawn before the peer leaves.

## Authority

* **State Authority** decides which peer writes replicated state.
* **Input Authority** identifies the player whose network input drives an
  object in Host/Client.
* **Shared Mode Master Client** owns scene-authority responsibilities in Shared
  Mode but does not automatically own every object.
* **Request State Authority** works in Shared Mode only when the NetworkObject
  permits authority override.

Validate authority before changing replicated state. Use RPCs for discrete
requests or presentation, not as a substitute for predicted per-tick input.

## Scene changes

Use **Load Scene** and **Unload Scene** from the Server, Host, or Shared Mode
Master Client. Observe **On Scene Load Start** and **On Scene Load Done**.
Every client build must contain the same network scenes and compatible Fusion
object table.

## Rejoin and late join

Late joiners receive replicated Networked state. Cached visual-scripting RPCs
are replayed only when cache is enabled and have not been removed. Keep
durable game state in Networked properties or networked variables; use cached
RPCs for reconstructable visual state.

For rejoin, use a stable authenticated user identifier and rebuild the
player-to-avatar mapping on State Authority. Never assume a reused `PlayerRef`
is the same user.
