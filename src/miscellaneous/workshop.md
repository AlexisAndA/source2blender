# The Community Workshop

Steam offers game developers the ability to make the workshop available for their titles, for things such as mods and extra content.

Several Source Engine titles like Source Filmmaker and Left 4 Dead 2 have their workshops available with plenty of community-made content.

In order to download these workshop items with tools like [Steam Workshop Downloader](https://steamworkshopdownloader.io/).

::: warning
Several titles do not allow the direct download of their workshop's assets through the public Steam API and may even require the user to own the game.
:::

## SteamCMD

You can also use [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD) to download workshop items (among many other things).

1. Log in to the Steam Network with the following command:

    ```bash
    login anonymous
    ```

    You can also enter the Steam Network with your Steam account.

    ```bash
    login { username } { password }
    ```

2. Find the AppID and the WorkshopID of the item you want to download.

    For example, let's get the AppID and WorkshopID of [this item](https://steamcommunity.com/sharedfiles/filedetails/?id=2795332172). In the URL, the ``id`` query has the WorkshopID (in this case, ``2795332172``). This item is available in the [Garry's Mod](https://steamcommunity.com/app/4000/workshop/) workshop which has the AppID in a ``/app/`` route (so 4000 in this case).

3. Download the item with SteamCMD with the following command:

    ```bash
    workshop_download_item { AppID } { WorkshopID }
    ```

    After the process has finished SteamCMD will report the directory the item was downloaded to.
