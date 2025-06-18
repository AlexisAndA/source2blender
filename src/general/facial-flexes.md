# Facial Flexes

The Source Engine supports facial flexes via blend shapes (shape keys in Blender).

## Hardware Morphs

Hardware Morph or HWM is the primary system used by high quality models in Source Filmmaker. They offer advanced face posing capabilities.

![Face Poser Showcase](/faceposer.gif)

A model utilizes HWM if it has blend shapes named ``BrowOutV``, ``SmileFull`` or ``PuffLipsLo``.

### Conversion

In order to convert this system to Blender, use this [add_hwm_controls.py](https://github.com/hisprofile/blenderstuff/blob/main/Tools/HWM%20Scripts/add_HWM_controls.py) script.

This script requires two vertex groups, ``blendright`` and ``blendleft``. ``blendright`` should be a gradient starting from the right side of the face towards the left, and vice versa, made possible using the Gradient tool
in Weight Paint mode. You can enable wireframe mode in the object tab to help guide yourself for an equal fade.

After running the script, sliders will be added to ``Data Properties`` -> ``custom properties``.

::: tip
The TF2-Trifecta addon adds extra features to the sliders.
:::
