<template>
  <div class="navbar">
    <NavigationMenu>
      <NavigationMenuList class="w-full justify-between hidden md:flex">
        <NavigationMenuItem v-for="nav in menus">
          <NavigationMenuLink :href="nav.href" class="mr-4" :class="navigationMenuTriggerStyle()">
            {{ $t(nav.title) }}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <Sheet>
      <SheetTrigger asChild>
        <AppIconButton variant="outline" icon="Menu" class="text-black md:hidden p-2 rounded hover:bg-accent" />
      </SheetTrigger>
      <SheetContent side="right" class="w-64">
        <SheetHeader>
          <SheetTitle>Put logo Here</SheetTitle>
          <!-- <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription> -->
        </SheetHeader>
        <nav class="mt-6 flex flex-col space-y-4">
          <SheetClose asChild>
            <NuxtLink v-for="nav in menus" :to="nav.href">{{ $t(nav.title) }}</NuxtLink>
          </SheetClose>
        </nav>
        <!-- <SheetFooter>
        <Button type="submit">Save changes</Button>
        <SheetClose asChild>
          <Button variant="outline">Close</Button>
        </SheetClose>
      </SheetFooter> -->
      </SheetContent>
    </Sheet>
  </div>
</template>
<script setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
const menus = [
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Gear',
    href: '/gear',
  },
  {
    title: 'About',
    href: '/about',
  },
]
// TODO: 加入顯示/ 隱藏 navLink 之判斷式
const route = useRoute()
console.log(`route`, route)


</script>