const movies = [
    {
        id: 1,
        title: "Rosemary's Baby",
        image: "https://m.media-amazon.com/images/I/A1Vmrrc2S+L._SL1500_.jpg",
        year: "1968",
        description: "A young wife comes to believe that her offspring is not of this world. Waifish Rosemary Woodhouse (Mia Farrow) and her struggling actor husband Guy (John Cassavetes) move to a New York City apartment building with an ominous reputation and odd neighbors Roman and Minnie Castavet (Sidney Blackmer, Ruth Gordon). When Rosemary becomes pregnant she becomes increasingly isolated, and the diabolical truth is revealed only after Rosemary gives birth.",
        rating: 0.0,
        genres: []
    },
    {
        id: 2,
        title: "Return of the Living Dead",
        image: "https://m.media-amazon.com/images/M/MV5BYzY0ZjJlNmMtMGU3NC00Yjk3LTk0N2ItMDNlMDVhZjA4OTFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        year: "1985",
        description: "When foreman Frank (James Karen) shows new employee Freddy (Thom Mathews) a secret military experiment in a supply warehouse, the two klutzes accidentally release a gas that reanimates corpses into flesh-eating zombies. As the epidemic spreads throughout Louisville, Ky., and the creatures satisfy their hunger in gory and outlandish ways, Frank and Freddy fight to survive with the help of their boss (Clu Gulager) and a mysterious mortician (Don Calfa).",
        rating: 0.0,
        genres: []
    },
    {
        id: 3,
        title: "Behind the Mask",
        image: "https://m.media-amazon.com/images/I/81UoLziAh8L._SY445_.jpg",
        year: "2006",
        description: "Nice, normal-looking Leslie Vernon (Nathan Baesel) has an obsession with movie-style slashers like Michael Myers, Jason Voorhees and Freddy Krueger. Leslie decides to follow in the footsteps of his heroes, and, ever the self-promoter, invites a documentary filmmaker (Angela Goethals) and her crew to follow him around as he constructs his own grisly legacy.",
        rating: 0.0,
        genres: []
    },
    {
        id: 4,
        title: "The Texas Chainsaw Massacre",
        image: "https://m.media-amazon.com/images/M/MV5BMTU1MzY2NDc2MV5BMl5BanBnXkFtZTgwMTc3MTUzMzI@._V1_.jpg",
        year: "1974",
        description: "When Sally (Marilyn Burns) hears that her grandfather's grave may have been vandalized, she and her paraplegic brother, Franklin (Paul A. Partain), set out with their friends to investigate. After a detour to their family's old farmhouse, they discover a group of crazed, murderous outcasts living next door. As the group is attacked one by one by the chainsaw-wielding Leatherface (Gunnar Hansen), who wears a mask of human skin, the survivors must do everything they can to escape.",
        rating: 0.0,
        genres: []
    },
    {
        id: 5,
        title: "The Evil Dead",
        image: "https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        year: "1981",
        description: "Ashley 'Ash' Williams (Bruce Campbell), his girlfriend and three pals hike into the woods to a cabin for a fun night away. There they find an old book, the Necronomicon, whose text reawakens the dead when it's read aloud. The friends inadvertently release a flood of evil and must fight for their lives or become one of the evil dead. Ash watches his friends become possessed, and must make a difficult decision before daybreak to save his own life in this, the first of Sam Raimi's trilogy.",
        rating: 0.0,
        genres: []
    },
    {
        id: 6,
        title: "Friday the 13th",
        image: "https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        year: "1980",
        description: "Crystal Lake's history of murder doesn't deter counselors from setting up a summer camp in the woodsy area. Superstitious locals warn against it, but the fresh-faced young people -- Jack (Kevin Bacon), Alice (Adrienne King), Bill (Harry Crosby), Marcie (Jeannine Taylor) and Ned (Mark Nelson) -- pay little heed to the old-timers. Then they find themselves stalked by a brutal killer. As they're slashed, shot and stabbed, the counselors struggle to stay alive against a merciless opponent.",
        rating: 0.0,
        genres: []
    },
    {
        id: 7,
        title: "Get Out",
        image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
        year: "2017",
        description: "Now that Chris and his girlfriend, Rose, have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries leads him to a truth that he never could have imagined.",
        rating: 0.0,
        genres: []
    },
    {
        id: 8,
        title: "Creep",
        image: "https://m.media-amazon.com/images/M/MV5BMTUwOTg5MDkyNV5BMl5BanBnXkFtZTgwMDI0ODA5NTE@._V1_.jpg",
        year: "2014",
        description: "Aaron answers an online ad and drives to a stranger's house to film him for the day. The man wants to make a movie for his unborn child, but his requests become more bizarre as the day goes along.",
        rating: 0.0,
        genres: []
    },
    {
        id: 9,
        title: "Creep 2",
        image: "http://www.doublefeaturepreachers.com/uploads/7/4/6/5/74658965/creep-2_orig.jpg",
        year: "2017",
        description: "A video artist quickly realizes she has made a mistake when she meets a serial killer in a cabin.",
        rating: 0.0,
        genres: []
    },
    {
        id: 10,
        title: "Black Christmas",
        image: "https://m.media-amazon.com/images/M/MV5BMDUxM2IyYzgtMjU1ZS00Mzc4LWIwMmUtYzczMzM5ZWIzNGUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        year: "1974",
        description: "As winter break begins, a group of sorority sisters, including Jess (Olivia Hussey) and the often inebriated Barb (Margot Kidder), begin to receive anonymous, lascivious phone calls. Initially, Barb eggs the caller on, but stops when he responds threateningly. Soon, Barb's friend Claire (Lynne Griffin) goes missing from the sorority house, and a local adolescent girl is murdered, leading the girls to suspect a serial killer is on the loose. But no one realizes just how near the culprit is.",
        rating: 0.0,
        genres: []
    },
    {
        id: 11,
        title: "Zombie Strippers!",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Zombie_strippers.jpg",
        year: "2008",
        description: "With too many wars and too few soldiers, a lab develops a virus that brings dead Marines back to life. When a test subject escapes, he heads to a strip club and infects dancer Jessy (Jennifer Holland), who becomes a zombie. The club's owner, Ian (Robert Englund), discovers that undead Jessy pulls in more money, and he encourages the other girls to get infected, including the popular Kat (Jenna Jameson). Kat and her friends go along with the plan -- but then they start killing the clients.",
        rating: 0.0,
        genres: []
    },
    {
        id: 12,
        title: "The Silence of the Lambs",
        image: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        year: "1991",
        description: "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
        rating: 0.0,
        genres: []
    },
    {
        id: 13,
        title: "Mandy",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Mandy_%282018_film%29.png",
        year: "2018",
        description: "In the Pacific Northwest in 1983, outsiders Red Miller and Mandy Bloom lead a loving and peaceful existence. When their pine-scented haven is savagely destroyed by a cult led by the sadistic Jeremiah Sand, Red is catapulted into a phantasmagoric journey filled with bloody vengeance and laced with deadly fire.",
        rating: 0.0,
        genres: []
    },
    {
        id: 14,
        title: "Psycho",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/1200px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg",
        year: "1960",
        description: "Phoenix secretary Marion Crane (Janet Leigh), on the lam after stealing $40,000 from her employer in order to run away with her boyfriend, Sam Loomis (John Gavin), is overcome by exhaustion during a heavy rainstorm. Traveling on the back roads to avoid the police, she stops for the night at the ramshackle Bates Motel and meets the polite but highly strung proprietor Norman Bates (Anthony Perkins), a young man with an interest in taxidermy and a difficult relationship with his mother.",
        rating: 0.0,
        genres: []
    },
    {
        id: 15,
        title: "Frankenhooker",
        image: "https://m.media-amazon.com/images/I/81GMwoXnjTL._SL1500_.jpg",
        year: "1990",
        description: "Phoenix secretary Marion Crane (Janet Leigh), on the lam after stealing $40,000 from her employer in order to run away with her boyfriend, Sam Loomis (John Gavin), is overcome by exhaustion during a heavy rainstorm. Traveling on the back roads to avoid the police, she stops for the night at the ramshackle Bates Motel and meets the polite but highly strung proprietor Norman Bates (Anthony Perkins), a young man with an interest in taxidermy and a difficult relationship with his mother.",
        rating: 0.0,
        genres: []
    },
    {
        id: 16,
        title: "Tucker & Dale VS. Evil",
        image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-7746045182.jpg",
        year: "2010",
        description: "Two scruffy pals' (Tyler Labine, Alan Tudyk) backwoods vacation takes a bloody turn when ignorant college students mistake them for a pair of murderous hillbillies.",
        rating: 0.0,
        genres: []
    },
    {
        id: 17,
        title: "Ginger Snaps",
        image: "https://m.media-amazon.com/images/M/MV5BOTc4OTU4MjU1Ml5BMl5BanBnXkFtZTcwNzM1NTgxMQ@@._V1_.jpg",
        year: "2000",
        description: "The story of two outcast sisters, Ginger (Katharine Isabelle) and Brigitte (Emily Perkins), in the mindless suburban town of Bailey Downs. On the night of Ginger's first period, she is savagely attacked by a wild creature. Ginger's wounds miraculously heal but something is not quite right. Now Brigitte must save her sister and save herself.",
        rating: 0.0,
        genres: []
    },
    {
        id: 18,
        title: "Nope",
        image: "https://omg.blog/wp-content/uploads/2022/03/NopePoster.jpg",
        year: "2022",
        description: "Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behavior.",
        rating: 0.0,
        genres: []
    },
    {
        id: 19,
        title: "Beyond the Black Rainbow",
        image: "https://upload.wikimedia.org/wikipedia/en/1/17/Beyond_the_Black_Rainbow_poster.jpg",
        year: "2012",
        description: "A heavily sedated woman (Eva Allan) with ESP tries to escape from the secluded commune where she's been held captive.",
        rating: 0.0,
        genres: []
    },
    {
        id: 20,
        title: "Sleepaway Camp",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f1/SleepawayCampposter.jpg",
        year: "1983",
        description: "Bunks and the showers are a mad stabber's beat at a summer camp strictly for teens.",
        rating: 0.0,
        genres: []
    },
    {
        id: 21,
        title: "The Shining",
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        year: "1980",
        description: "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.",
        rating: 0.0,
        genres: []
    },
    {
        id: 22,
        title: "The Invisible Man",
        image: "https://resizing.flixster.com/tEb8Dq9hIf36h21vxW7ijyIJ88M=/206x305/v2/https://flxt.tmsimg.com/assets/p17290385_p_v8_ah.jpg",
        year: "2020",
        description: "After staging his own suicide, a crazed scientist uses his power to become invisible to stalk and terrorize his ex-girlfriend. When the police refuse to believe her story, she decides to take matters into her own hands and fight back.",
        rating: 0.0,
        genres: []
    },
    {
        id: 23,
        title: "The Voices",
        image: "https://resizing.flixster.com/R2zjiUQ2R8WqNf-H9crKAeav3uU=/206x305/v2/https://flxt.tmsimg.com/assets/p11379539_p_v8_aj.jpg",
        year: "2015",
        description: "A mentally unhinged factory worker (Ryan Reynolds) must decide whether to listen to his talking cat and become a killer, or follow his dog's advice to keep striving for normalcy.",
        rating: 0.0,
        genres: []
    },
    {
        id: 24,
        title: "Last Shift",
        image: "https://m.media-amazon.com/images/I/51wSz30MlBL.jpg",
        year: "2014",
        description: "A rookie cop's first solo shift in a closing station turns into a living nightmare.",
        rating: 0.0,
        genres: []
    },
]


export default movies;