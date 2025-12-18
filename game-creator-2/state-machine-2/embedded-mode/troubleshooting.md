---
description: Common issues and solutions for Embedded Mode
---

# Troubleshooting

Solutions to common problems when using Embedded Mode.

## "Prefabs are not supported"

**Problem**: You're trying to use Embedded Mode on a prefab.

**Solution**: Convert to Asset Mode instead:

1. Create a new State Machine asset in your Project
2. Design your logic in the asset
3. Assign the asset to the Runner on your prefab
4. Use Runner Variables for instance-specific data

## Missing References After Scene Reload

**Problem**: Scene references show as "Missing" after reloading the scene.

**Causes**:
* The referenced GameObject was deleted
* The scene was reloaded without saving
* The GameObject was renamed or moved

**Solutions**:
* Reassign the reference to the correct GameObject
* Use **Self** or **Target** patterns instead of direct references
* Ensure the scene is saved before closing

## Can't Open Embedded Graph

**Problem**: Unable to open the embedded graph for editing.

**Solutions**:
* Ensure the Runner component has an embedded graph (look for "Open Graph" button)
* If button shows "Create Embedded", click it to create a new embedded graph
* Check if the Runner is on a prefab (not supported)

## Graph Not Running

**Problem**: The embedded state machine doesn't execute.

**Checklist**:
1. Is the Runner component enabled?
2. Is the Start node connected to other nodes?
3. Are there any console errors?
4. Is the GameObject active in the scene?

## Changes Not Saving

**Problem**: Changes to the embedded graph are lost.

**Solutions**:
* Always save the scene after editing an embedded graph
* Check that the scene isn't read-only
* Ensure Unity has write permissions to the project folder

## Performance Issues

**Problem**: Many embedded state machines causing slowdown.

**Solutions**:
* Convert frequently-used logic to Asset Mode
* Simplify complex embedded graphs
* Use Sub-State Machines to share common patterns
* Profile using Unity's Profiler to identify bottlenecks

## Reference Became Invalid

**Problem**: A previously working reference stopped working.

**Common Causes**:
* GameObject was moved to a different scene
* GameObject was converted to/from a prefab
* Scene was duplicated without updating references

**Solution**: Re-drag the correct GameObject into the property field.

