<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="inner">
          <div class="logo"/>
          <nav class="main-nav">
            <router-link
              exact
              to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/users">Users</router-link>
          </nav>
        </div>
      </div>
    </header>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>
