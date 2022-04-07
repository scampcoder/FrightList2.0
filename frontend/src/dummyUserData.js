const users = [
    {
        id: 1,
        userName: "Jason Vorhees",
        email: "goneswimmin@crystallake.com",
        profileData: {
            about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet commodi omnis consectetur ut, nihil quas.",
            favFilm: "Sleepaway Camp"
        },
        lists: {
            previouslyWatched: [
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
                }
            ],
            watchList: [
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
            ]
        },
        activity: {
            comments: [
                {
                    movie: "Freddy vs. Jason",
                    comment: "Awesome ending."
                },
                {
                    movie: "The Creature from the Black Lagoon",
                    comment: "Best hiding place? Underwater."
                },
                {
                    movie: "Halloween",
                    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate labore sed voluptatibus aut officia veritatis tempore architecto ipsam fugiat!"
                },
                {
                    movie: "House of 1000 Corpses",
                    comment: "What did I just watch?"
                },
                {
                    movie: "Suspiria",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum quod sapiente blanditiis voluptates sed facilis repellendus excepturi labore incidunt architecto, voluptatum ad! Placeat recusandae officia cum culpa corrupti maiores."
                },
            ],
        }
    }
]

export default users;