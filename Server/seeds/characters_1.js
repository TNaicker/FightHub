
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {character_name: 'Answer', game_id: 1,
        summary: 'Adjutant to self-proclaimed President Chipp Zanuff. He is blessed with a preternatural memory, and can remember any facts after hearing them once. Some refer to him as a "Human Database".',
         defense_modifier: 1.03, guts: 0, weight: '(100) Medium', stun_resistance: 55,
         RISC_intertia: 5, RISC_gain: 36, jump_startup: '3F',
         backdash_startup: '21F', backdash_invulnerability: '1-12F'},

        {character_name: 'Axl Low', game_id: 1,
        summary: 'Axl is a relentlessly "glass half full" sort of person. He rarely thinks about anything very hard, and is generally content to just get the gist of things or go with the flow. This means he\'s not especially good at constructing logical arguments, so other people tend not to take him very seriously. That isn\'t to say he\'s apathetic, though: He\'s just trying to find an answer that\'ll satisfy everyone. If someone is in trouble he can\'t ignore it, and in fact his inability to leave someone behind shows that he has twice the compassion of the average person. Axl hates even the idea of death, and would never take a life, even if someone deserved to die.',
         defense_modifier: 1.06, guts: 1, weight: '(100) Medium', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '4F',
         backdash_startup: '16F', backdash_invulnerability: '1-8F'},

        {character_name: 'Baiken', game_id: 1,
        summary: 'Tougher by far than any man, and a fighter through and through, Baiken has sacrificed everything in the pursuit of one goal. She\'s always ready with a weapon, and a dispute quickly becomes a fight if baiken is involved. She often acts before thinking, but she sticks to her principles and prefers to get everything out in the open. Although she\'d rather fight than talk, she\'s capable of admitting she was wrong if the argument is strong enough.',
         defense_modifier: 1.18, guts: 4, weight: '(105) light', stun_resistance: 55,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-8F'},

        {character_name: 'Bedman', game_id: 1,
        summary: 'Bedman sleeps constantly, so little of his personality is seen in the waking world. Only within the dream world can one see the sort of person he truly is. He possesses an acute intellect and an expansive vocabulary, and excels at identifying his opponents\' weaknesses and at finding and exploiting the truths they try to bury. He is extremely proud, and it frequently comes across in his condescending attitude, but he has no concern for distinctions like race, gender, or age: To Bedman, only his objective matters. Everything else is immaterial.',
         defense_modifier: 0.98, guts: 0, weight: '(96) Heavy', stun_resistance: 60,
         RISC_intertia: 4, RISC_gain: 28, jump_startup: '3F',
         backdash_startup: '23F', backdash_invulnerability: '1-11F'},

        {character_name: 'Chipp Zanuff', game_id: 1,
        summary: 'Chipp is hot-headed and not really what anyone would call a thinker - he\'s more street brawler than college student. He has had some political and social training, and is aware of his own coarse nature, but he regards it as an asset, not a liability. His methods may be crude, but the morality he\'s learned from his master never wavers, and his straightforward approach, bull-headed as it may be, has captured the hearts of his people. He\'s earned the respect and admiration of those he\'s saved - which is not an insignificant number - and many affectionately call him "boss."',
         defense_modifier: 1.30, guts: 4, weight: '(100) Medium', stun_resistance: 50,
         RISC_intertia: 5, RISC_gain: 36, jump_startup: '3F',
         backdash_startup: '21F', backdash_invulnerability: '1-9F'},

        {character_name: 'Dizzy', game_id: 1,
        summary: 'Born from the union of a Gear and a human, Dizzy is honest and pure-hearted and has a great love of nature and the company of people. On the flip side, she abhors violence and conflict. She is the wife of Ky Kiske and mother of his only child, Sin. She was freed from the seal protecting her following the Cradle Incident.',
         defense_modifier: 1.06, guts: 1, weight: '(105) Light', stun_resistance: 50,
         RISC_intertia: 6, RISC_gain: 28, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-9F'},

        {character_name: 'Elphelt Valentine', game_id: 1,
        summary: 'An adorable young woman who is obsessed with improving her feminine charm. She loves animals and nature, and can\'t bear to see anyone alone. Elphelt will charge into any problem head-first, shielded by impenetrable optimism. Her efforts at improving the aforementioned charm, however, often fall short. If you start a conversation about love, she\'ll start talking and won\'t stop - often taking off into flights of slightly strange fantasy. She is the "younger sister" of Ramlethal and is also a Valentine.',
         defense_modifier: 1.03, guts: 0, weight: '(105) Light', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '13F', backdash_invulnerability: '1-9F'},

        {character_name: 'Faust', game_id: 1,
        summary: 'The moment you think everything out of Faust\'s mouth is complete nonsense, he\'ll utter something so profound it\'ll leave you scratching your head. At times he has been known to help people find their paths in life. Going mad shattered whatever Faust\'s original personality might have been, and even though he regained his sanity, a good deal of that breakage is now permanent. What is certain, however, is that while his behavior may still be erratic, the compassion and generosity he was once known for has returned undimmed.',
         defense_modifier: 1.00, guts: 0, weight: '(100) Medium', stun_resistance: 65,
         RISC_intertia: 6, RISC_gain: 26, jump_startup: '3F',
          backdash_startup: '13F', backdash_invulnerability: '1-7F'},

        {character_name: 'Kum Haehyun', game_id: 1,
        summary: 'The "Tuner" of KI forces that flow in all things of the world. This ability exists only in very limited number of bloodlines and is one of the rarest abilities in the world. Haehyun is a descendent of that bloodline and the current head of the Kum family. She puts forth maximum effort with regard to everything, gaining much trust from everyone around her. She pilots the humanoid cyborg body Jun Ryo Kum, but most people don\'t know that she\'s inside.',
         defense_modifier: 0.96, guts: 2, weight: '(94) Super Heavy', stun_resistance: 70,
         RISC_intertia: 4, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-9F'},

        {character_name: 'I-No', game_id: 1,
        summary: 'I-No has no problem acting as though you\'ve been friends for years and striking up a friendly conversation... If she wants to. She also has no problem using her feminine charm to manipulate anyone receptive to it - which is just about everyone. The truth, however, is that she considers all of humanity to be beneath her - That man included. Her true, vicious nature is never far away, and it quickly rises to the top whenever someone challenges her. She is fully aware of her own eccentricities, and their source, but she isn\'t quite sure where they will ultimately take her.',
         defense_modifier: 1.06, guts: 1, weight: '(105) Light', stun_resistance: 55,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-8F'},

        {character_name: 'Jack-O\' Valentine', game_id: 1,
        summary: 'One of the three advisors to "That Man." She has awakened in an incomplete state, so she cannot be active without her candy and mask. Her past is shrouded in mystery and her memory is hazy as well. Because of her unstable state, her tone of voice changes every which way.',
         defense_modifier: 1.03, guts: 2, weight: '(105) Light', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '13F', backdash_invulnerability: '9F'},

        {character_name: 'Jam Kuradoberi', game_id: 1,
        summary: 'Iron chef of Chinese food and master of Chinese martial arts. She is a bright and cheerful girl that has the ability to fight using her Ki force. Her dream is to open her own restaurant and have lots of people enjoy her cooking. She almost attained her dream, but was smashed down every time due to unforseen troubles. But her passion can\'t be stamped out, so she keeps trying',
         defense_modifier: 1.06, guts: 3, weight: '(105) Light', stun_resistance: 65,
         RISC_intertia: 5, RISC_gain: 25, jump_startup: '3F',
         backdash_startup: '13F', backdash_invulnerability: '1-7F'},

        {character_name: 'Johnny Sfondi', game_id: 1,
        summary: 'Leader of the Jellyfish Pirates. He is a master of the Hirofumi Style of swordsmanship. He is a peerless lover of women and has a big heart to match. His vast knowledge and wide range of connections helps him everywhere he goes. He has adopted war orphans (girls only) to the band of pirates he runs and raises them. He\'s wanted throughout the world, but the people love him for his Robin Hood ways.',
         defense_modifier: 1.00, guts: 3, weight: '(98) Heavy', stun_resistance: 70,
         RISC_intertia: 5, RISC_gain: 28, jump_startup: '4F',
         backdash_startup: '11F', backdash_invulnerability: '1-7F'},

        {character_name: 'Ky Kiske', game_id: 1,
        summary: 'When he was younger, Ky was a zealous defender of justice and order above all. And although he was sincere in his convictions, he was also notoriously inflexible. Since becoming king, however, his view has broadened significantly, and he has learned to see the world from the perspective of others. No matter how kind-hearted he is, though, once Ky gets angry he is prone to taking rash actions that betray his inexperience. Some doubt his abilities and think him unfit to rule, but many others adore him for displaying such human behavior.',
         defense_modifier: 1.03, guts: 2, weight: '(100) Medium', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-9F'},

        {character_name: 'Leo Whitefang', game_id: 1,
        summary: 'Leo oversees the local government of more than twenty nations in the European and Asian regions of Illyria, and is one of the Three Kings. He is both a rival and a friend to Ky Kiske, and they fought together during the Crusades. His boisterous attitude might make others think him the sort to shoot first and ask questions later, but in reality he is exceptionally cautious. Above all, he hates losing, and has far more pride than the average man. His solution to this problem is to be constantly and overwhelmingly intimidating. That doesn\'t mean he is necessarily arrogant, at least not in aggregate: He is a much harsher critic of himself than he is of anyone else. He is in the process of building his own dictionary, and tends to redefine words as he sees fit. For example he has written his sister\'s name in the section for "devil."',
         defense_modifier: 1.00, guts: 3, weight: '(98) Heavy', stun_resistance: 70,
         RISC_intertia: 5, RISC_gain: 28, jump_startup: '4F',
         backdash_startup: '16F', backdash_invulnerability: '1-9F'},

        {character_name: 'May', game_id: 1,
        summary: 'May is cheerful and openhearted, and never sweats the small stuff. She believes in taking action first, and thinking later, which is an attitude her friends often wish she could temper a little. Still, as much as she may be exasperating, her constant positivity is infectious, and no one can be around her for long without feeling buoyed by her enthusiasm.',
         defense_modifier: 1.06, guts: 3, weight: '(105) Light', stun_resistance: 70,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '13F', backdash_invulnerability: '1-9F'},

        {character_name: 'Millia Rage', game_id: 1,
        summary: 'Millia has always been somewhat silent and cold, but since leaving the Guild she has abandoned the practice of action solely on the basis of cost and benefit. After living among more normal people she has learned to tap into a wider range of human emotion. Though she might not seem to have changed much, it has made her more considerate of others, and more compassionate. Nonetheless, years of assassin conditioning do not disappear overnight, so some coldness remains. She also takes pains to make sure the danger that follows her does not spread to others. In situations that she doesn\'t know how to handle, she will sometimes act more like a young girl than the woman she has become.',
         defense_modifier: 1.21, guts: 3, weight: '(105) Light', stun_resistance: 55,
         RISC_intertia: 6, RISC_gain: 40, jump_startup: '3F',
         backdash_startup: '11F', backdash_invulnerability: '1-5F'},

        {character_name: 'Potemkin', game_id: 1,
         summary: 'Potemkin is proud, and has an honest heart. He has a kind, gentle character, and great love for nature. He places the utmost importance on ceremony, and loathes superficial behavior or unreasonable demands. Because of this personality trait, he is able to meet pressure and adversity head on. While Potemkin can withstand pain, he cannot bear to witness the pain of others.',
         defense_modifier: 0.93, guts: 3, weight: '(94) Super Heavy', stun_resistance: 80,
         RISC_intertia: 4, RISC_gain: 32, jump_startup: '5F',
         backdash_startup: '21F', backdash_invulnerability: '1-20F'},

        {character_name: 'Ramlethal Valentine', game_id: 1,
        summary: 'The life forms known as Valentines are born into the Backyard, and have no emotions. They do not grasp concepts like right, wrong, like, dislike, or value - apart from desiring the completion of their misions. As such, orders from the entity they call "Mother" are absolute. They have no sense of affection, but no feelings of doubt or restraint either - only a machine-like determination to see their mission completed. Valentines see themselves as simply instruments used to reach a goal, and consequently somewhat disposable. In the individual known as Ramlethal, however, one can detect a faint but unmistakable hint of emotion.',
         defense_modifier: 1.06, guts: 1, weight: '(105) Light', stun_resistance: 60,
         RISC_intertia: 6, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-9F'},

        {character_name: 'Raven', game_id: 1,
        summary: 'One of the three advisors to "That Man." He has pledged absolute allegiance to That Man. Raven has an immortal body and cannot die of natural causes. After living for hundreds of years, nothing stimulates him anymore, except one thing... Pain.',
         defense_modifier: 1.10, guts: 5, weight: '(100) Medium', stun_resistance: 55,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '21F', backdash_invulnerability: '1-9F'},

        {character_name: 'Sin Kiske', game_id: 1,
        summary: 'He is the child of Ky and Dizzy, making him one-quarter Gear by blood. He has been kept a secret from the larger world, and given to Sol to raise. He looks much older than he really is - in truth, he\'s less than 10. He is brimming with relentless optimism, and doesn\'t overthink things. Some would say he doesn\'t think, period. While it can make him seem innocent, it also demonstrates his naiveté.',
         defense_modifier: 1.04, guts: 1, weight: '(100) Medium', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '24F', backdash_invulnerability: '1-12F'},

        {character_name: 'Slayer', game_id: 1,
        summary: 'If one were to look up the definition of "unflappable" in Leo\'s dictionary, they would find an (admittedly crude) drawing of Slayer. His calm demeanor is impossible to shake, and he approaches every situation and encounter with gentlemanly composure. The code which Slayer adheres to is, in a sense, a form of role-playing, in that he does not seek to influence others to adopt his morality.',
         defense_modifier: 0.96, guts: 1, weight: '(100) Medium', stun_resistance: 70,
         RISC_intertia: 5, RISC_gain: 28, jump_startup: '4F',
         backdash_startup: '28F', backdash_invulnerability: '1-20F'},

        {character_name: 'Sol Badguy', game_id: 1,
        summary: 'Sol hates working any harder than he has to, which means he rarely puts much effort into anything. A man of few words, he says only as much as he absolutely has to in order to get his point across. Consequently he\'s not very good at expressing himself, and tends to compensate by bullying people into line or simply steamrolling them. Most people see him as crude and self-centered... Even people who might call him a friend.',
         defense_modifier: 1.00, guts: 1, weight: '(100) Medium', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-8F'},

        {character_name: 'Venom', game_id: 1,
        summary: 'Though he is an assassin by trade, Venom is a gentle and honest man who can only rarely bring himself to lie. There is a rigidity to his speech that suggests he favors reason above all else, but in fact he places high importance on emotion, empathy, and his own humility. Anyone who openly considers Zato an enemy, however, will ignite a flame of rage in Venom that is not easily extinguished.',
         defense_modifier: 1.03, guts: 1, weight: '(100) Medium', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '4F',
         backdash_startup: '13F', backdash_invulnerability: '1-7F'},

        {character_name: 'Zato-1', game_id: 1,
        summary: 'When he was alive, Zato was known for having a calm disposition, and for being someone who would give each aspect of a  problem great consideration. He still felt things strongly, even if he kept his feelings hidden from the rest of the world. During his time in the underworld, however, Zato was subjected to the breadth of human experience, and seems to have all capacity for emotional reaction burned out of him by it. He cannot even remember how it felt to be emotionally moved. As such, he perceives no value in anything, including himself. Good and bad, joy and anger - these are just words to him. He claims the world is a dull place, but even that is a statement born more from habit than actual feeling. There is one exception to his ennui: Millia. Only around her can zato feel anything like one might call emotion.',
         defense_modifier: 1.09, guts: 0, weight: '(100) Medium', stun_resistance: 60,
         RISC_intertia: 5, RISC_gain: 32, jump_startup: '3F',
         backdash_startup: '16F', backdash_invulnerability: '1-7F'},
      ]);
    });
};
