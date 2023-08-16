<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ul>
      <draggable
        :list="list"
        :disabled="!enabled"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }">
          <li :class="`li-${element.colorType}`">{{ element.content }}</li>
        </template>
      </draggable>
    </ul>
  </div>
</template>
<script setup>
import draggable from 'vuedraggable'
let list = ref([
  {id: Symbol(),colorType: 'one', 'content': 'test1'},
  {id: Symbol(),colorType: 'two', 'content': 'test2'},
  {id: Symbol(),colorType: 'three', 'content': 'test3'},
  {id: Symbol(),colorType: 'one', 'content': 'test4'},
  {id: Symbol(),colorType: 'two', 'content': 'test5'},
  {id: Symbol(),colorType: 'three', 'content': 'test6'},
  {id: Symbol(),colorType: 'one', 'content': 'test7'},
  {id: Symbol(),colorType: 'two', 'content': 'test8'},
  {id: Symbol(),colorType: 'three', 'content': 'test9'},
  {id: Symbol(),colorType: 'one', 'content': 'test10'},
  {id: Symbol(),colorType: 'two', 'content': 'test11'},
  {id: Symbol(),colorType: 'three', 'content': 'test12'},
])
let dragging = ref(false)
let enabled = ref(true)
function checkMove(e){
  window.console.log("Future index: " + e.draggedContext.futureIndex);
}
</script>
<style lang="less" scoped>
@colors: {
  one: rgba(106, 110, 230, 0.4);
  two: rgba(123,234, 56, 0.5);
  three:rgba(205,103,132, 0.4);
};
ul {
  .list-group {
    display: grid;
    // grid-template-rows: 3;
    grid-template-columns: repeat(4, 1fr);

    li {
      list-style-type: none;
      padding: 12px;
      width: fit-content;
      border-radius: 10px;
      margin-bottom: 10px;
      cursor: move;
      each(@colors, {
        &.li-@{key} {
          background: @value;
        }
      })
    }
  }
}
</style>