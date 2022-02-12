<template>
  <div class="home">
    <div class="title"><h1>Typing Variables</h1></div>
    <div class="about"><span>テキストが入ります。</span></div>
    <div class="variableList"><span>ここに一覧表を表示します。</span></div>
    <div class="display-field">
      <p class="count">60</p>
      <div class="wrap">
        <p class="variable-text">
          <span v-for="text of targetTextArray" v-bind:key="text">
            <span class="each-str">{{ text }}</span>
          </span>
        </p>
      </div>
      <div class="start-button">
        <span v-on:click="startButton" v-on:keydown="startButton">ボタン</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  private targetTextArray = Array<string>();
  private pressedKey = "";

  startButton(): void {
    this.createText();
    this.keyDown();
  }

  createText(): void{
    let ran = Math.floor(Math.random() * this.variableArray.length);
    this.targetTextArray = this.variableArray[ran].split("");
  }

  keyDown(): void {
    addEventListener("keydown", (event) => {
      this.pressedKey = event.key;
      this.checkStr(this.pressedKey, this.targetTextArray[0]);
    });
  }

  checkStr(clickedKey: string, targetTextStr: string): void{
    if ( clickedKey === targetTextStr ){
      console.log("key正解");
      this.targetTextArray.splice(0, 1);
    } else {
      console.log("間違い");
      return;
    }
    if(!this.targetTextArray.length){//this.targetTextArray === []ではダメだった。なぜ？？
        this.createText();
      }
  }

  get variableArray(): Array<string> {
    return this.$store.getters.getVariableArray;
  }
}
</script>
<style scoped>
.display-field {
  font-size: 6em;
  text-align: center;
}
.count {
  margin: 0;
  font-weight: bold;
  color: #888;
}
.wrap {
  margin-top: 20px;
  padding: 20px 10px;
  background-color: #a4b0be;
  font-weight: bold;
  color: #fff;
}
</style>
