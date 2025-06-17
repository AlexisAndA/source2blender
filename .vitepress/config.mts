import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Source 2 Blender",
  description: "Simple, Beginner-Friendly Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      { text: 'Get Started', link: '/get-started' },
      { text: 'Contributing', link: '/contributing' },
      { text: 'Installing Programs', link: '/installing-programs' },
      { text: 'General Information', link: '/general-information' },
      {
        text: 'General',
        items: [
          { text: 'Audio And Sounds', link: '/general/audio-and-sounds' },
          { text: 'Importing Models', link: '/general/models' },
          { text: 'Importing Maps', link: '/general/maps' },
          { text: 'Importing Animations', link: '/general/animations' },
          { text: 'Facial Flexes', link: '/general/facial-flexes' },
          { text: 'Light Warps', link: '/general/lightwarps' }
        ]
      },
      {
        text: 'Team Fortress 2',
        items: [

          { text: 'Characters And Cosmetics', link: '/team-fortress/characters-and-cosmetics' },
          { text: 'Maps And Props', link: '/team-fortress/maps-and-props' },
          { text: 'Sound Effects And Voice Lines', link: '/team-fortress/soundeffects-and-voicelines' }
        ]
      },
      {
        text: "Garry's Mod", items: [
          { text: 'Addons', link: '/garrys-mod/addons' }
        ]
      },
      {
        text: 'Misc.', items: [
          { text: 'The Community Workshop', link: '/miscellaneous/workshop' },
          { text: 'Rigging', link: '/miscellaneous/rigging.md' },
          { text: 'OptiPloy', link: '/miscellaneous/optiploy' },
          { text: 'Standard Colorspace', link: '/miscellaneous/standard-colorspace' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/ueENX7XUYm' },
      { icon: 'github', link: 'https://github.com/AlexisAndA/source2blender' }
    ]
  },
  srcDir: 'src',
  ignoreDeadLinks: true,
})
