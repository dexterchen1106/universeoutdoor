export default defineEventHandler((event) => {
  const query = getQuery(event);
  const { category, weightMax, keyword, system } = query;

  const gears = [
    {
      id: "gear-001",
      name: "MSR Hubba Hubba 2",
      description: "適合登山健行的雙人帳篷，重量輕、抗風佳。",
      category: "mountain",
      system: "sleep",
      brand: "MSR",
      weight: 1720,
      size: [213, 127, 100],
      sizeList: [
        { type: "packed", value: [46, 15, 15] },
        { type: "expanded", value: [213, 127, 100] },
      ],
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNaIlqXd6oC21L_bbbH7i3xHKTpqNZ0oCqhzpt9ppn_wkOSKrvLX8yBPTPyQEdl2p3gVMfvsWC5wpZjA0A24owrGtQXKyvMf-lxKHm0FKXKFkXyEb8gQfKwB3CONZZYmUm-iea3fp3RQSp1_h3Zfrs=w1050-h1868-s-no-gm?authuser=0",
      tagList: ["帳篷", "露營", "雙人", "三季帳"],
    },
    {
      id: "gear-002",
      name: "Garmin Descent Mk3",
      description: "高階潛水錶，支援多種潛水模式與 GPS 功能。",
      category: "diving",
      system: "electronic",
      brand: "Garmin",
      weight: 99,
      size: [5.2, 5.2, 1.78],
      sizeList: [
        { type: "packed", value: [5.2, 5.2, 1.78] },
        { type: "expanded", value: [5.2, 5.2, 1.78] },
      ],
      image:
        "https://www.garmin.com.tw/m/tw/g/products/descent-mk3i-43-frenchgray-pd-01-lg.jpg",
      tagList: ["潛水錶", "Garmin", "氣瓶壓力"],
    },
    {
      id: "gear-003",
      name: "Sea to Summit Ether Light XT Insulated",
      description: "適合冬季健行露營的輕量隔熱充氣睡墊，舒適保暖。",
      category: "mountain",
      system: "sleep",
      brand: "Sea to Summit",
      weight: 490,
      size: [183, 55, 10],
      sizeList: [
        { type: "packed", value: [28, 12, 12] },
        { type: "expanded", value: [183, 55, 10] },
      ],
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPJR66G5aaFFBWzargELghhB__KX8CuYeBzyE5x5cO-KrKrmHWVbZSh8cvoBiSB4H9w8jj2QRldr0DE3bIKvr726QZbWe4EPrp0FVV3rHjtsa8MqF8yxDmaysL1pks8rT-KlFzFUrY4aZHjsW-AYus=w1868-h1868-s-no-gm?authuser=0",
      tagList: ["睡墊", "輕量化", "保暖"],
    },
  ];

  const filtered = gears.filter((item) => {
    const matchCategory = category ? item.category === category : true;
    const matchSystem = system ? item.system === system : true;
    const matchWeightMax = weightMax ? item.weight <= Number(weightMax) : true;

    const kw = keyword?.toLowerCase();
    const matchKeyword = kw
      ? item.name.toLowerCase().includes(kw) ||
        item.brand.toLowerCase().includes(kw) ||
        item.description.toLowerCase().includes(kw) ||
        item.tagList.some((tag) => tag.toLowerCase().includes(kw))
      : true;

    return matchCategory && matchSystem && matchWeightMax && matchKeyword;
  });

  return filtered;
});
