export default defineEventHandler((event) => {
  const { id } = event.context.params;

  console.log(`id ${id}`);
  // 根據 id 尋找資料
  // const gear = gears.find((g) => g.id === id)

  // if (!gear) {
  //   throw createError({ statusCode: 404, message: 'Gear not found' })
  // }

  return {
    id: "gear-001",
    name: "MSR Hubba Hubba 2",
    brand: "MSR",
    description: "適合登山健行的雙人帳篷，重量輕、抗風佳。",
    category: "mountain",
    system: "sleep",
    tagList: ["帳篷", "露營", "雙人", "三季帳"],
    weight: 1720,
    sizeList: [
      { type: "packed", value: [46, 15, 15] },
      { type: "floor", value: [213, 127, 100] },
    ],
    imgList: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNaIlqXd6oC21L_bbbH7i3xHKTpqNZ0oCqhzpt9ppn_wkOSKrvLX8yBPTPyQEdl2p3gVMfvsWC5wpZjA0A24owrGtQXKyvMf-lxKHm0FKXKFkXyEb8gQfKwB3CONZZYmUm-iea3fp3RQSp1_h3Zfrs=w1050-h1868-s-no-gm?authuser=0",
      },
      {
        url: "https://www.msrgear.com/on/demandware.static/-/Sites-msr-master-catalog/default/dw1d8f0cc7/images/large/11505-hubba-hubba-nx-green-side.jpg",
      },
    ],
    urlList: [
      {
        title: "MSR 官網",
        url: "https://www.msrgear.com/tents/backpacking-tents/hubba-hubba-nx-2",
      },
      {
        title: "登山樂購買頁",
        url: "https://www.outdoorfun.com.tw/p/hubba-hubba-2",
      },
    ],
  };
});
