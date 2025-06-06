import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "yellowstone",
    name: "Yellowstone National Park",
    location: "Wyoming, USA",
    rating: 4.5,
    difficulty: "Moderate",
    features: ["Wildlife", "Geysers", "Hot Springs", "Hiking"],
    image:
      "https://images.unsplash.com/photo-1550347778-473e0058577c?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "America's first national park offers incredible geothermal features and diverse wildlife in a pristine wilderness setting.",
    fullDescription:
      "Yellowstone National Park spans 2.2 million acres of wilderness recreation area atop a volcanic hotspot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers – including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.",
    highlights: [
      "Over 10,000 hydrothermal features including geysers and hot springs",
      "Home to the largest high-altitude lake in North America",
      "Diverse wildlife including grizzly bears, wolves, and bison herds",
      "More than 1,000 miles of hiking trails",
    ],
    planningInfo:
      "The best time to visit is late spring through early fall. Book accommodations well in advance as the park is extremely popular. Consider staying in gateway towns like West Yellowstone or Jackson if park lodging is unavailable.",
  },
  {
    id: "yosemite",
    name: "Yosemite National Park",
    location: "California, USA",
    rating: 4.8,
    difficulty: "Challenging",
    features: ["Rock Climbing", "Waterfalls", "Giant Sequoias", "Valley Views"],
    image:
      "https://images.unsplash.com/photo-1558013757-1bcc1477733b?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Iconic granite cliffs, giant sequoias, and spectacular waterfalls make this one of America's most beloved national parks.",
    fullDescription:
      "Yosemite National Park is in California's Sierra Nevada mountains. It's famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants and art galleries. The Ansel Adams Gallery has prints of the photographer's renowned black-and-white landscapes of the area.",
    highlights: [
      "El Capitan - world's largest granite monolith",
      "Half Dome - iconic granite dome accessible by hiking permit",
      "Yosemite Falls - tallest waterfall in North America",
      "Mariposa Grove - home to over 500 mature giant sequoias",
    ],
    planningInfo:
      "Summer is peak season with crowds and full accommodations. Spring offers the best waterfalls, while fall provides fewer crowds and beautiful colors. Permits required for Half Dome and wilderness backpacking.",
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon National Park",
    location: "Arizona, USA",
    rating: 4.9,
    difficulty: "Easy to Hard",
    features: ["Canyon Views", "Rim Trail", "River Rafting", "Stargazing"],
    image:
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=2940&auto=format&fit=crop",
    description:
      "One of the world's most spectacular geological wonders, offering breathtaking views and diverse outdoor activities.",
    fullDescription:
      "The Grand Canyon, carved by the Colorado River over millions of years, reveals a spectacular landscape of colorful rock layers and formations. This UNESCO World Heritage Site offers visitors the chance to experience one of the most complete geologic columns on Earth, with rock layers dating back nearly 2 billion years.",
    highlights: [
      "South Rim offers year-round access with spectacular viewpoints",
      "North Rim provides a more remote and intimate experience",
      "Colorado River rafting through 277 river miles",
      "Some of the clearest night skies in the United States",
    ],
    planningInfo:
      "The South Rim is open year-round, while the North Rim closes in winter. Book accommodations and tours well in advance. The park offers everything from easy rim walks to challenging multi-day backpacking trips.",
  },
  {
    id: "zion",
    name: "Zion National Park",
    location: "Utah, USA",
    rating: 4.7,
    difficulty: "Moderate",
    features: ["Slot Canyons", "The Narrows", "Angels Landing", "Desert"],
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2940&auto=format&fit=crop",
    description:
      "Towering red cliffs, narrow slot canyons, and the Virgin River create a stunning desert landscape perfect for adventure.",
    fullDescription:
      "Zion National Park is a southwest Utah desert park near Springdale. It features massive sandstone cliffs, slot canyons, and the Virgin River. The park is known for its hiking trails, including the famous Narrows, where hikers wade through the Virgin River between towering canyon walls, and Angels Landing, a challenging hike to a narrow ridge with panoramic views.",
    highlights: [
      "The Narrows - hiking through the Virgin River in a slot canyon",
      "Angels Landing - thrilling hike with chains for the final ascent",
      "Emerald Pools - series of pools and waterfalls accessible by easy trails",
      "Canyon Junction Bridge - historic bridge offering great photo opportunities",
    ],
    planningInfo:
      "Spring and fall offer the best weather for hiking. Summer can be extremely hot, making water activities more appealing. Shuttle system operates in the main canyon from March through October.",
  },
  {
    id: "acadia",
    name: "Acadia National Park",
    location: "Maine, USA",
    rating: 4.6,
    difficulty: "Easy",
    features: ["Coastal Views", "Lighthouses", "Carriage Roads", "Fall Colors"],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop",
    description:
      "Rugged Atlantic coastline meets pristine forests in this quintessential New England national park experience.",
    fullDescription:
      "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, healthy forest, and clear lakes. The park preserves about half of Mount Desert Island, and parts of the Schoodic Peninsula and Isle au Haut, all in Maine.",
    highlights: [
      "Cadillac Mountain - first place to see sunrise in the US from October to March",
      "Thunder Hole - natural rock formation where waves crash dramatically",
      "Jordan Pond - pristine lake with mountain views and famous popovers",
      "Bass Harbor Head Lighthouse - iconic Maine lighthouse",
    ],
    planningInfo:
      "Fall is spectacular for foliage but very crowded. Summer offers the warmest weather but requires advance planning. The park's carriage roads are perfect for biking and offer a gentler way to explore.",
  },
  {
    id: "rocky-mountain",
    name: "Rocky Mountain National Park",
    location: "Colorado, USA",
    rating: 4.7,
    difficulty: "Challenging",
    features: ["Alpine Lakes", "14ers", "Elk Viewing", "Snow Peaks"],
    image:
      "https://images.unsplash.com/photo-1546497247-0e898ee59397?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "High-altitude wilderness featuring snow-capped peaks, alpine lakes, and abundant wildlife in the heart of the Rockies.",
    fullDescription:
      "Rocky Mountain National Park is a living showcase of the grandeur of the Rocky Mountains. The park's 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests over 12,000 feet – along with 300+ miles of hiking trails, wildflowers, wildlife, stargazing and unforgettable vistas at every turn.",
    highlights: [
      "Trail Ridge Road - highest continuous paved road in the US",
      "Longs Peak - the park's highest summit at 14,259 feet",
      "Alberta Falls - popular waterfall accessible by moderate hike",
      "Elk bugling season in fall creates unforgettable wildlife experiences",
    ],
    planningInfo:
      "Summer is the only time Trail Ridge Road is fully open. Timed entry permits required during peak season. High altitude can affect visitors - take time to acclimate and stay hydrated.",
  },
  {
    id: "glacier",
    name: "Glacier National Park",
    location: "Montana, USA",
    rating: 4.8,
    difficulty: "Moderate to Challenging",
    features: ["Glaciers", "Alpine Meadows", "Wildlife", "Scenic Drives"],
    image:
      "https://images.unsplash.com/photo-1510942498794-3228abd301c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A breathtaking landscape of rugged mountains, crystal-clear lakes, and remnants of ancient glaciers awaits adventurers in Glacier National Park.",
    fullDescription:
      "Glacier National Park is a pristine wilderness area in the Rocky Mountains of northwestern Montana. It's known for its stunning alpine scenery, over 700 miles of trails, and remnants of more than two dozen glaciers. The Going-to-the-Sun Road, a marvel of engineering, offers panoramic views of the park's dramatic terrain. Glacier is also home to mountain goats, grizzly bears, and a variety of ecosystems ranging from prairie to tundra.",
    highlights: [
      "Going-to-the-Sun Road - one of the most scenic drives in the world",
      "Grinnell Glacier - iconic glacier hike with turquoise lake views",
      "Many Glacier - wildlife-rich area with stunning lake and mountain scenery",
      "Hidden Lake Overlook - popular trail with sweeping alpine views and mountain goats",
    ],
    planningInfo:
      "Peak season is July to September, when most trails and roads are accessible. Going-to-the-Sun Road requires a vehicle reservation in summer. Be prepared for quickly changing weather and possible wildlife encounters.",
  },
];
