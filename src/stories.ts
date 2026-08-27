export type Story = {
  letter: string
  /** Short label printed on the tile front, under the charcoal art. */
  word: string
  /** Full story name shown as the title on the flipped card. */
  title: string
  /** Set when the illustration already carries the word, so the tile stays clean. */
  hideWord?: boolean
  keywords: string[]
  verseRef: string
  verseText: string
  summary: string
  christ: string
  image: string
}

export const stories: Story[] = [
  {
    letter: 'A',
    word: 'Adam',
    title: 'Adam',
    keywords: ['sin', 'death', 'fruit', 'disobedience', 'world'],
    verseRef: 'Romans 5:12 ESV',
    verseText: '“sin came into the world through one man, and death through sin”',
    summary:
      'Adam and Eve were tempted by Satan to be like God if they ate the forbidden fruit. They disobeyed God, and sin entered the world, separating all people from Him.',
    christ: 'Adam’s sin brought our punishment, but Jesus was punished for our salvation.',
    image: 'Adam.jpeg',
  },
  {
    letter: 'B',
    word: 'Boot',
    title: 'Boot',
    hideWord: true,
    keywords: ['serpent', 'offspring', 'bruise', 'promise', 'crush'],
    verseRef: 'Genesis 3:15 ESV',
    verseText: '“he shall bruise your head, and you shall bruise his heel.”',
    summary:
      'After Adam and Eve sinned, God promised that one day the offspring of the woman would crush the serpent’s head, though the serpent would wound Him.',
    christ: 'Satan bruised Jesus at the cross, but Jesus crushed Satan through His resurrection.',
    image: 'boot.jpeg',
  },
  {
    letter: 'C',
    word: 'Cain',
    title: 'Cain',
    keywords: ['jealousy', 'offering', 'brother', 'blood', 'murder'],
    verseRef: 'Hebrews 12:24 ESV',
    verseText: '“the sprinkled blood that speaks a better word than the blood of Abel.”',
    summary:
      'Cain grew jealous when God accepted Abel’s offering and not his. In anger, he killed his brother, bringing bloodshed and guilt into the story of humanity.',
    christ: 'Abel’s blood cried out for justice, but Jesus’ blood cries out for mercy.',
    image: 'Cain.jpeg',
  },
  {
    letter: 'D',
    word: 'Destroyer',
    title: 'Destroyer',
    keywords: ['flood', 'ark', 'Noah', 'covenant', 'waters'],
    verseRef: 'Genesis 6:17–18 ESV',
    verseText:
      '“I will bring a flood of waters upon the earth… But I will establish my covenant with you”',
    summary:
      'The world became corrupt and violent, so God sent a flood to destroy it, saving Noah and his family through the ark.',
    christ: 'The world was punished and one man was saved, but Jesus was punished to save the world.',
    image: 'Destroyer.jpeg',
  },
  {
    letter: 'E',
    word: 'Elevate',
    title: 'Elevate',
    keywords: ['tower', 'Babel', 'name', 'scatter', 'heaven'],
    verseRef: 'Genesis 11:4 ESV',
    verseText: '“Come, let us build ourselves a city and a tower with its top in the heavens”',
    summary:
      'People built the Tower of Babel to make a name for themselves and reach heaven on their own strength. God scattered them and confused their language.',
    christ: 'Man tried to rise to heaven, but Jesus came down to bring us up.',
    image: 'Elevate.jpeg',
  },
  {
    letter: 'F',
    word: 'Father',
    title: 'Father',
    keywords: ['Abraham', 'nation', 'blessing', 'promise', 'nations'],
    verseRef: 'Genesis 12:2–3 ESV',
    verseText:
      '“I will make of you a great nation… and in you all the families of the earth shall be blessed.”',
    summary:
      'God called Abraham to leave his home and promised to make him a great nation through whom all people would be blessed.',
    christ:
      'Abraham was promised a son and blessing, but Jesus is the true Son who brings blessing to all nations.',
    image: 'Father.jpeg',
  },
  {
    letter: 'G',
    word: 'Gomorrah',
    title: 'Gomorrah',
    keywords: ['fire', 'Sodom', 'sulfur', 'judgment', 'Lot'],
    verseRef: 'Genesis 19:24–25 ESV',
    verseText:
      '“the LORD rained on Sodom and Gomorrah sulfur and fire from the LORD out of heaven.”',
    summary:
      'God judged Sodom and Gomorrah for their great wickedness but showed mercy by rescuing Lot and his family.',
    christ: 'Fire fell on Sodom for sin, but Jesus took the fire for ours.',
    image: 'Gomorrah.jpeg',
  },
  {
    letter: 'H',
    word: 'Hagar',
    title: 'Hagar',
    keywords: ['Hagar', 'promise', 'impatience', 'Ishmael', 'power'],
    verseRef: 'Genesis 18:14 ESV',
    verseText: '“Is anything too hard for the LORD?… Sarah shall have a son.”',
    summary:
      'Abraham and Sarah grew impatient waiting for God’s promise and used Hagar to have a child. God showed that His promises come by His power, not ours.',
    christ: 'Man’s strength brought strife, but Jesus came through God’s promise, not man’s power.',
    image: 'Hagar.jpeg',
  },
  {
    letter: 'I',
    word: 'Isaac',
    title: 'Isaac',
    keywords: ['ram', 'wood', 'sacrifice', 'lamb', 'provide'],
    verseRef: 'Genesis 22:8 ESV',
    verseText: '“God will provide for himself the lamb for a burnt offering, my son.”',
    summary:
      'God tested Abraham by asking him to sacrifice his son Isaac, but provided a ram in his place, showing that He would one day provide His own Son.',
    christ: 'Isaac carried the wood, but Jesus carried the cross.',
    image: 'Isaac.jpeg',
  },
  {
    letter: 'J',
    word: 'Jacob',
    title: 'Jacob',
    keywords: ['wrestle', 'blessing', 'night', 'grasp', 'Israel'],
    verseRef: 'Genesis 32:26 ESV',
    verseText: '“I will not let you go unless you bless me.”',
    summary:
      'Jacob spent his life grasping for blessing. One night he wrestled with God and would not let go until God blessed him.',
    christ: 'Jacob wrestled for blessing, but Jesus gives it freely.',
    image: 'Jacob.jpeg',
  },
  {
    letter: 'K',
    word: 'Kneel',
    title: 'Kneel',
    keywords: ['Joseph', 'brothers', 'famine', 'good', 'bow'],
    verseRef: 'Genesis 50:20 ESV',
    verseText: '“you meant evil against me, but God meant it for good”',
    summary:
      'Joseph’s brothers sold him into slavery, but God used Joseph’s suffering to save many lives during a famine.',
    christ: 'God meant Joseph’s pain for good, but Jesus is the good that saves many lives.',
    image: 'Kneel.jpeg',
  },
  {
    letter: 'L',
    word: 'Locked',
    title: 'Locked',
    keywords: ['Egypt', 'slavery', 'chains', 'multiply', 'cry'],
    verseRef: 'Exodus 1:12 ESV',
    verseText: '“the more they were oppressed, the more they multiplied”',
    summary:
      'God’s people were enslaved in Egypt and cried out for deliverance. God heard them and raised up a rescuer.',
    christ: 'Israel was chained in Egypt, but Jesus frees us from sin.',
    image: 'Locked.jpeg',
  },
  {
    letter: 'M',
    word: 'Moses',
    title: 'Moses',
    keywords: ['Moses', 'water', 'Pharaoh', 'rescuer', 'lead'],
    verseRef: 'Exodus 2:10 ESV',
    verseText: '“She named him Moses… ‘I drew him out of the water.’”',
    summary:
      'God sent Moses to confront Pharaoh and lead His people out of Egypt through the Passover and the Red Sea.',
    christ: 'Moses led Israel out of Egypt, but Jesus leads us out of slavery to sin.',
    image: 'Moses.jpeg',
  },
  {
    letter: 'N',
    word: 'Nile',
    title: 'Nile',
    keywords: ['basket', 'reeds', 'hide', 'baby', 'river'],
    verseRef: 'Exodus 2:3 ESV',
    verseText: '“She put the child in it and placed it among the reeds by the river bank.”',
    summary:
      'When Pharaoh ordered baby boys killed, Moses’ mother hid him, then laid him in a basket among the Nile reeds. God kept him safe.',
    christ: 'A mother hid her baby in the Nile, but Jesus is the Child God kept to save us.',
    image: 'Nile.jpeg',
  },
  {
    letter: 'O',
    word: 'Oppressed',
    title: 'Oppressed',
    keywords: ['affliction', 'cry', 'bush', 'come down', 'deliver'],
    verseRef: 'Exodus 3:7–8 ESV',
    verseText:
      '“I have surely seen the affliction of my people… and I have come down to deliver them”',
    summary:
      'God saw Israel groaning under Egypt’s whip. From the burning bush He said He had come down to deliver them.',
    christ: 'God saw Israel’s pain and came down, but Jesus came down to deliver us.',
    image: 'Oppressed.jpeg',
  },
  {
    letter: 'P',
    word: 'Passover',
    title: 'Plagues & Passover',
    keywords: ['lamb', 'blood', 'plague', 'night', 'Pharaoh'],
    verseRef: 'Exodus 12:13 ESV',
    verseText: '“when I see the blood, I will pass over you”',
    summary:
      'God struck Egypt with plagues, and the blood of the lamb marked Israel’s doors so death would pass over. That very night Pharaoh sent them out, and they left Egypt in haste.',
    christ: 'The lamb’s blood marked Israel for rescue, but Jesus is the Lamb whose blood saves us.',
    image: 'Passover.jpeg',
  },
  {
    letter: 'Q',
    word: 'Quenched',
    title: 'Quenched',
    keywords: ['rock', 'water', 'manna', 'wilderness', 'drink'],
    verseRef: 'Exodus 17:6 ESV',
    verseText: '“you shall strike the rock, and water shall come out of it, and the people will drink.”',
    summary:
      'In the wilderness Israel grew thirsty, and God told Moses to strike the rock. Water poured out so the people could drink.',
    christ: 'Water came from the rock, but Jesus is the Rock who gives living water.',
    image: 'Quenched.jpeg',
  },
  {
    letter: 'R',
    word: 'Red Sea',
    title: 'Red Sea',
    keywords: ['sea', 'dry ground', 'wind', 'wall', 'way'],
    verseRef: 'Exodus 14:21–22 ESV',
    verseText:
      '“the LORD drove the sea back… and the people of Israel went into the midst of the sea on dry ground”',
    summary:
      'God split the sea, and Israel walked through on dry ground, with walls of water on both sides.',
    christ: 'God made a way through the sea, but Jesus made a way through death.',
    image: 'RedSea.jpeg',
  },
  {
    letter: 'S',
    word: 'Sinai',
    title: 'Sinai',
    keywords: ['mountain', 'fire', 'smoke', 'covenant', 'tremble'],
    verseRef: 'Exodus 19:18 ESV',
    verseText: '“Mount Sinai was wrapped in smoke because the LORD had descended on it in fire.”',
    summary:
      'God came down on Mount Sinai in fire and smoke, and the mountain trembled as He made a covenant with His people.',
    christ: 'God came down in fire to give a covenant, but Jesus came down to keep it for us.',
    image: 'Sinai.jpeg',
  },
  {
    letter: 'T',
    word: 'Tabernacle',
    title: 'Ten Commandments & Tabernacle Directions',
    keywords: ['law', 'sanctuary', 'dwell', 'tent', 'presence'],
    verseRef: 'Exodus 25:8 ESV',
    verseText: '“And let them make me a sanctuary, that I may dwell in their midst.”',
    summary:
      'God gave His people His law and told them to build a sanctuary so He could dwell in their midst.',
    christ: 'God told them to build Him a dwelling, but Jesus came to dwell with us.',
    image: 'Tabernacle.jpeg',
  },
  {
    letter: 'U',
    word: 'Mountain',
    title: 'Up on the Mountain',
    keywords: ['cloud', 'forty', 'mountain', 'Moses', 'nights'],
    verseRef: 'Exodus 24:18 ESV',
    verseText: '“Moses entered the cloud and went up on the mountain.”',
    summary: 'Moses entered the cloud on the mountain and stayed with God forty days and forty nights.',
    christ: 'Moses went up into the cloud, but Jesus came down from heaven to stay with us.',
    image: 'Mountain.jpeg',
  },
  {
    letter: 'V',
    word: 'Valley',
    title: 'Valley',
    keywords: ['calf', 'dancing', 'tablets', 'worship', 'valley'],
    verseRef: 'Exodus 32:19 ESV',
    verseText: '“he threw the tablets out of his hands and broke them at the foot of the mountain.”',
    summary:
      'While Moses was on the mountain, Israel made a golden calf in the valley and bowed to it. Moses broke the tablets at the foot of the mountain.',
    christ: 'Israel bowed to a calf in the valley, but Jesus is the true Lord we were made to worship.',
    image: 'Valley.jpeg',
  },
  {
    letter: 'W',
    word: 'Worship Tent',
    title: 'Worship Tent',
    keywords: ['glory', 'cloud', 'tabernacle', 'filled', 'tent'],
    verseRef: 'Exodus 40:34 ESV',
    verseText: '“the cloud covered the tent of meeting, and the glory of the LORD filled the tabernacle.”',
    summary:
      'When the tabernacle was finished, the cloud covered the tent and the glory of the LORD filled it.',
    christ: 'Glory filled the tent, but Jesus is God with us.',
    image: 'WorshipTent.jpeg',
  },
  {
    letter: 'X',
    word: 'eXodus',
    title: 'eXodus',
    keywords: ['strength', 'song', 'salvation', 'praise', 'LORD'],
    verseRef: 'Exodus 15:2 ESV',
    verseText: '“The LORD is my strength and my song, and he has become my salvation”',
    summary:
      'After God saved them through the sea, Israel sang: the LORD is their strength, their song, and their salvation.',
    christ: 'Israel sang of the LORD as their salvation, but Jesus is our strength, song, and salvation.',
    image: 'eXodus.jpeg',
  },
]
