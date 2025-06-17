# Installing Programs

We need some specialized programs to do any asset conversion. This page documents the programs required.

## Blender

Blender can be downloaded for free from [their official website](https://download.blender.org/release/).
If any issues crop up with new versions of blender the [old versions](https://download.blender.org/release/) can be found here.

Blender 4.2 removed EEVEE Legacy, so most people in the community use 4.1.

### Extensions

Blender exposes an addons system for us to extend the program with. Here are some useful Blender addons in regards to porting:

- [SourceIO](https://github.com/REDxEYE/SourceIO)
- [Plumber](https://github.com/lasa01/Plumber/releases/latest)
- [Blender Source Tools](http://steamreview.org/BlenderSourceTools/)

In order to install addons, go to ``Edit`` -> ``Preferences``. In the addons menu, click on the install button and then select the **zipped addon** (and not the extracted version).

![Installing Addons](/installing_addons.gif)

## VPKEdit

VPKEdit is a program that allows us to read and write to VPK files. It can be downloaded from [GitHub](https://github.com/craftablescience/VPKEdit).

::: tip
Alternatively, you can use [GCFScape](https://nemstools.github.io/pages/GCFScape-Download.html), which offers similar functionality for working with VPK files.
:::

## Crowbar

Crowbar is a general-purpose tool that helps us with many different Source Engine related tasks. It can be downloaded from [GitHub](https://github.com/ZeqMacaw/Crowbar/releases/latest).

## VTFEdit

VTFEdit is a program that allows us to interact with VTF (and VMT) files. It can be found at [Nem's Tools](https://nemstools.github.io/pages/VTFLib-Download.html).

Alternative, you can use VTFEdit Enhanced which is a more modern fork of VTFEdit. It can be found on [GitHub](https://github.com/WereTech/VTFEdit-Reloaded/releases/tag/latest).

## BSPSource

BSPSource allows us to "decompile" a map file into its source. It can be downloaded from [GitHub](https://github.com/ata4/bspsrc/releases).

::: warning
BSPSource is written in Java and therefore requires the Java Runtime Environment. If you have downloaded the jar-only version you need to have the JRE installed system-wide.
:::
