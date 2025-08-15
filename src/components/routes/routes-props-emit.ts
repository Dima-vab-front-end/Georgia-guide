import { Interfaces } from '@shared';
import { PropType } from 'vue';

export function createEmitObject<T extends string[]>(events: [...T]) {
  return {
    defineEmits: events as string[], // Mutable version
    readonlyDefineEmits: events as readonly [...T] // Readonly version
  };
}

export const definedProps = {
  routes: {
    type: Array as PropType<Interfaces.IArticle[]>,
    default: []
  }
};

const getEmitObject = createEmitObject([]);

export const definedEmits = getEmitObject.defineEmits;

export type EventEmits = {};
