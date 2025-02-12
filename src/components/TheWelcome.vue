<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Cosa 1</template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam magnam pariatur voluptas quasi deserunt fugiat quae, aliquam et maxime beatae assumenda illo, doloribus sint nulla? Vel ad dolores maxime?
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Cosa 2</template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam magnam pariatur voluptas quasi deserunt fugiat quae, aliquam et maxime beatae assumenda illo, doloribus sint nulla? Vel ad dolores maxime?
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Cosa 3</template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam magnam pariatur voluptas quasi deserunt fugiat quae, aliquam et maxime beatae assumenda illo, doloribus sint nulla? Vel ad dolores maxime?
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Cosa 4</template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam magnam pariatur voluptas quasi deserunt fugiat quae, aliquam et maxime beatae assumenda illo, doloribus sint nulla? Vel ad dolores maxime?
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Cosa 5</template>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam magnam pariatur voluptas quasi deserunt fugiat quae, aliquam et maxime beatae assumenda illo, doloribus sint nulla? Vel ad dolores maxime?
  </WelcomeItem>
</template>
