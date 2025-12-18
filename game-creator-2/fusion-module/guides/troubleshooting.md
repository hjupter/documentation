---
description: Solutions for common issues when developing with the Fusion module
---

# Troubleshooting

## Overview

This guide covers common issues and their solutions when developing multiplayer games with the Fusion module for Game Creator 2.

---

## Connection Issues

### Cannot Connect to Session

**Symptoms:**
- "Game not found" error
- Connection timeout
- Unable to join

**Solutions:**

1. **Verify Photon App ID**
   - Open Fusion Hub (Fusion → Fusion Hub)
   - Check App ID is correctly entered
   - Verify App ID matches your Photon dashboard

2. **Check Region Settings**
   - Ensure both host and client use the same region
   - Verify region is enabled in [Fusion Settings](../settings.md)
   - Try a different region

3. **Session Name Mismatch**
   - Session names are case-sensitive
   - Check for leading/trailing spaces
   - Use generated session codes for reliability

4. **Firewall/Network Issues**
   - Ensure UDP ports are open (5055-5058)
   - Try a different network
   - Disable VPN temporarily for testing

```
Quick Check Flow:
1. Photon Dashboard → Verify App ID
2. Fusion Settings → Verify regions enabled
3. Start Game instruction → Verify session name matches
4. Network → Check firewall/ports
```

### Connection Timeout

**Symptoms:**
- Long connection times
- "Connection timeout" error

**Solutions:**

1. **Check Internet Connection**
   - Test basic connectivity
   - Verify stable connection

2. **Try Closer Region**
   - Select region with lowest ping
   - Use "Get Best Region" instruction

3. **Reduce Initial Data**
   - Minimize spawned objects at start
   - Use lazy loading for non-essential objects

---

## Character Synchronization Issues

### Character Not Moving on Remote Clients

**Symptoms:**
- Local player moves fine
- Other players see character stationary

**Solutions:**

1. **Verify NetworkCharacter Component**
   ```
   Player Prefab:
   ├── Character (GC2)
   ├── NetworkObject ✓
   ├── NetworkTransform ✓
   ├── NetworkMecanimAnimator ✓
   └── NetworkCharacter ✓
   ```

2. **Check Prefab Registration**
   - Select player prefab
   - In NetworkObject, click "Register Prefab"
   - Or add to NetworkPrefabAssetSource

3. **Verify Authority**
   - Only Input Authority should control movement
   - Check "Is Local Player" condition in movement triggers

### Animations Not Syncing

**Symptoms:**
- Movement syncs but animations don't
- Animation parameters desync

**Solutions:**

1. **NetworkMecanimAnimator Setup**
   - Ensure component is on the same GameObject as Animator
   - Verify "Sync" checkbox is enabled for relevant parameters

2. **Animator Controller Consistency**
   - Same Animator Controller on all clients
   - Verify no build stripping of animations

3. **Parameter Types**
   - Triggers may not sync reliably; use bools instead
   - Ensure parameter names match exactly

### Character Jittering/Teleporting

**Symptoms:**
- Characters stutter during movement
- Position jumps unexpectedly

**Solutions:**

1. **Enable Interpolation**
   - In NetworkTransform, enable interpolation
   - Adjust interpolation settings

2. **Reduce Update Frequency Conflicts**
   - Don't update position from multiple sources
   - Check for conflicting character controllers

3. **Network Conditions**
   - Test with simulated lag
   - Implement client-side prediction

---

## Variable Synchronization Issues

### Variables Not Syncing

**Symptoms:**
- Variable changes locally but not on other clients
- Late joiners have wrong values

**Solutions:**

1. **Verify Network Component**
   ```
   For Local Variables:
   ├── Local Name Variables (GC2)
   └── Local Name Variables Network ✓

   For Global Variables:
   ├── NetworkObject ✓
   ├── Global Name Variables Network
   └── Global Name Variables Asset (assigned)
   ```

2. **Check Supported Types**
   | Type | Supported |
   |------|-----------|
   | Boolean | ✓ |
   | Number | ✓ |
   | String | ✓ (64 chars max) |
   | Vector2/3 | ✓ |
   | Color | ✓ |
   | GameObject | ⚠️ NetworkObject only |
   | Texture/Sprite | ✗ |

3. **Authority Check**
   - Only State Authority can modify variables
   - Use conditions to validate before changes

### String Truncation

**Symptoms:**
- Strings cut off after sync
- Missing characters

**Solutions:**

- Name Variables: 64 character limit
- List Variables: 32 character limit
- Use shorter strings or numeric IDs
- Consider using enums instead

---

## RPC Issues

### RPC Not Executing

**Symptoms:**
- RPC call succeeds but nothing happens
- No error messages

**Solutions:**

1. **Verify NetworkObject**
   - Target object must have NetworkObject component
   - NetworkObject must be spawned

2. **Check RPC Target**
   | Target | Who Executes |
   |--------|--------------|
   | All | Everyone including sender |
   | Proxies | Everyone except Input/State Authority |
   | InputAuthority | Only Input Authority |
   | StateAuthority | Only State Authority |

3. **Verify Trigger/Actions Setup**
   - Actions/Triggers must exist on target
   - Check component names match

### Duplicate RPC Execution

**Symptoms:**
- Effect plays multiple times
- Actions run twice

**Solutions:**

1. **Check RPC Target**
   - "All" includes the sender
   - Use "Proxies" to exclude sender

2. **Authority Filter**
   ```
   Trigger: On Attack Hit
   └── Condition Branch:
       └── If Has State Authority:
           └── Action RPC (Target: All)
   ```

3. **Prevent Re-entry**
   - Add cooldown checks
   - Use boolean flags to track execution

### Cache Not Working for Late Joiners

**Symptoms:**
- Late joiners miss cached state
- Inconsistent world state

**Solutions:**

1. **Verify Cache Is Enabled**
   - Check "Cache State" checkbox in RPC instruction

2. **Object Lifecycle**
   - Object must exist when player joins
   - Don't destroy/respawn cached objects

3. **Clear Old Cache**
   - Use "Remove Cached Actions" when resetting state
   - Clear cache before setting new cached state

---

## Session Management Issues

### Session Not Appearing in Lobby

**Symptoms:**
- Created session doesn't show in session list
- Other players can't find session

**Solutions:**

1. **Check Visibility Setting**
   - Verify "Is Visible" is true in Start Game
   - Check Session Visible instruction wasn't called

2. **Same Region Required**
   - Browser and host must be in same region
   - Verify region in lobby settings

3. **Lobby Connection**
   - Ensure "Join Lobby" was called before browsing
   - Wait for "On Lobby Started" event

### Host Migration Issues

**Symptoms:**
- Game crashes when host leaves
- State lost after migration

**Solutions:**

1. **Handle Authority Changes**
   ```
   Trigger: On State Authority Gained
   └── [Take over host responsibilities]
   ```

2. **Persistent State**
   - Use networked variables for important state
   - Avoid storing state only on host

3. **Graceful Shutdown**
   - Implement "On Shutdown" handler
   - Save/restore critical data

---

## Build Issues

### Works in Editor, Fails in Build

**Symptoms:**
- Multiplayer works in editor
- Fails in standalone build

**Solutions:**

1. **Network Prefab Registration**
   - Verify all prefabs in NetworkPrefabAssetSource
   - Check no prefabs were stripped

2. **Scene Setup**
   - Ensure network scenes in Build Settings
   - Check scene loading order

3. **Assembly Definitions**
   - Verify no editor-only code in runtime
   - Check assembly references

### WebGL Specific Issues

**Symptoms:**
- Connection fails in WebGL
- Different behavior than standalone

**Solutions:**

1. **Use WebSocket Transport**
   - Configure Fusion for WebSocket
   - Verify server supports WebSocket

2. **CORS Configuration**
   - Check server CORS settings
   - Verify allowed origins

3. **Memory Constraints**
   - Reduce pool sizes
   - Optimize networked data

---

## Performance Issues

### High Latency/Lag

**Solutions:**

1. **Reduce Network Traffic**
   - Minimize RPC frequency
   - Use appropriate sync intervals
   - Compress data where possible

2. **Optimize Pooling**
   - Enable object pooling
   - Pre-warm pools
   - Avoid runtime allocations

3. **Region Selection**
   - Use closest region
   - Consider player distribution

### Memory Leaks

**Solutions:**

1. **Proper Cleanup**
   - Despawn objects when done
   - Clear event subscriptions
   - Dispose network resources

2. **Pool Management**
   - Return objects to pool
   - Monitor pool growth
   - Set maximum pool sizes

---

## Debugging Tools

### Enable Debug Mode

1. Open **Game Creator → Fusion → Settings**
2. Enable **Debug Mode**
3. Check console for detailed logs

### Useful Debug Properties

| Property | Shows |
|----------|-------|
| `{Is In Session}` | Connection status |
| `{Player Count}` | Connected players |
| `{Session Name}` | Current session |
| `{Local Player Ping}` | Network latency |

### Console Log Patterns

```
[Fusion] Connected to session "MyGame"
[Fusion] Player joined: Player_1
[Fusion] RPC sent: ActionRPC (All)
[Fusion] Variable synced: Health = 100
```

---

## Getting Help

If you can't resolve an issue:

1. **Check Documentation**
   - Review relevant sections
   - Check examples project

2. **Enable Debug Mode**
   - Capture detailed logs
   - Note exact error messages

3. **Community Support**
   - Visit [Discord](https://discord.gg/ninjutsugames)
   - Include: Unity version, Fusion version, error logs

4. **Report Bugs**
   - Include reproduction steps
   - Attach minimal project if possible
