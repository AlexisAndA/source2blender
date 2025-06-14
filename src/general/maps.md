# Maps

In order to bring a map from Source to Blender, follow these steps:

1. Locate the map's BSP file. For example, Team Fortress 2 maps are located in ``[ game_directory ] / tf / maps``.
2. Decompile the map to a VMF file with BSPSource.
3. Import the map via Plumber from ``File`` -> ``Import`` -> ``Plumber`` -> ``Valve Map Format (.vmf)`` in Blender

## Applying the Skybox

Maps in the Source Engine may have 3D sky boxes. To apply a Skybox, first find it in the corner, then select all the objects that are near it.

::: info
Make sure none of the objects are linked to the rest of the map. If they are, then you have to go into Edit mode to separate it.
:::

After that, Shift Click the Empty. This is important because otherwise it won’t line up.
Finally, click ``Object`` -> ``Transform VMF 3D sky``.
