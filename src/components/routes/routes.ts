import { reactive, ExtractPropTypes } from 'vue';
import { definedProps, EventEmits } from './routes-props-emit';

export default function (
  emits: EventEmits,
  props: Readonly<ExtractPropTypes<typeof definedProps>>
) {
  return reactive({
    props,
    emits
  });
}
