import Character from '../views/character/Character.vue';
import Inventory from '../views/character/Inventory.vue';
import Skills from '../views/character/Skills.vue';
import Dungeons from '../views/character/Dungeons.vue';
import Battle from '../views/dungeons/battle.vue';
import MainLayout from '../layouts/_Layout.vue';

const routes = [
    {
        path: "/character",
        name: "Character",
        component: Character,
        meta: { layout: MainLayout }
      },
      {
        path: '/character/inventory',
        name: 'Inventory',
        component: Inventory,
        meta: { layout: MainLayout }
      },
      {
        path: '/character/skills',
        name: 'Skills',
        component: Skills,
        meta: { layout: MainLayout }
      },
      {
        path: "/dungeons",
        name: "Dungeons",
        component: Dungeons,
        meta: { layout: MainLayout }
      },
      {
        path: "/battle/:id",
        name: "Battle",
        component: Battle,
        meta: { layout: MainLayout }
      }
];

export default routes;