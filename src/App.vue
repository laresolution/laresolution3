<template>
  <div>
    <div>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="new1">New 1</a>
        </li>
        <li>
          <a href="new2">New 2</a>
        </li>
        <li>
          <a href="new3">New 3</a>
        </li>
      </ul>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
