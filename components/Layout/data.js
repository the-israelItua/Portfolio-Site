/* eslint-disable import/prefer-default-export */

import {
  createScoutAction,
  createScoutSection,
  createScoutPage,
} from 'scoutbar';
import ARTICLE_DATA from '../AppData/articles';
import LENS_DATA from '../AppData/lens';
import PROJECTS_DATA from '../AppData/projects';

export const actions = (theme) => [
  createScoutAction({
    label: 'Home',
    href: '/',
    keyboardShortcut: ['h'],
  }),

  createScoutAction({
    label: 'Resume',
    href:
      'https://drive.google.com/file/d/1ZPiypFSNefUZ83Jd94WuZO_DryI9umai/view?usp=share_link',
    keyboardShortcut: ['r'],
  }),
  createScoutAction({
    label: 'Contact Me',
    href: '/contact',
    keyboardShortcut: ['c'],
  }),

  createScoutSection({
    label: 'About Israel Itua',

    children: [
      createScoutAction({
        label: 'About Israel Itua',
        href: '/about',
        keyboardShortcut: ['a'],
      }),
      createScoutAction({
        label: "Israel Itua's Reads",
        href: '/about#reads',
      }),
      createScoutAction({
        label: 'Playlist',
        href: '/about#playlist',
      }),
      createScoutAction({
        label: "Adenekan's Lens",
        href: '/about#lens',
      }),
    ],
  }),

  createScoutSection({
    label: 'BY Codewonders',

    children: [
      createScoutPage({
        label: 'Projects',
        children: PROJECTS_DATA.map((project) =>
          createScoutAction({
            label: project.title,
            href: project.link,
            description: project.description,
            icon: project.imageUrl,
          })
        ),
      }),
      createScoutPage({
        label: 'Lens',
        children: LENS_DATA.map((project) =>
          createScoutAction({
            label: project.title,
            href: project.link,
            description: project.description,
            icon: project.imageUrl,
          })
        ),
      }),
      createScoutPage({
        label: 'Articles',
        children: ARTICLE_DATA.map((project) =>
          createScoutAction({
            label: project.title,
            href: project.link,
            description: project.description,
            icon: project.imageUrl,
          })
        ),
      }),
    ],
  }),

  createScoutSection({
    label: 'Preference',

    children: [
      createScoutAction({
        label: 'Change Theme',
        action: () => theme(),
        keyboardShortcut: ['meta', 'l'],
      }),
    ],
  }),
];
