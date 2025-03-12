const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "1608", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "¿Por qué Vienna es tan lindo?", // Example trending search query
    "Complejo análisis sobre por qué Fran te ama más que vos a él", // Another example query
    `¿Qué significa que a mi novio le guste que use orejas de gato?`, // A personalized trending search
  ],
  proTip: 'Pro tip: intenta buscando "¿Cuánto tiempo llevamos juntos?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-08-16", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Estamos juntos desde:", // Title displayed on the timer page
  timerMessage: "... y más por venir <3", // Message shown alongside the timer
  timeUnits: {
    days: "Días", // Label for days in the timer
    hours: "Horas", // Label for hours in the timer
    minutes: "Minutos", // Label for minutes in the timer
    seconds: "Segundos", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Hagamos un recap de nuestro tiempo juntos <3", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Canciones que escucho y pienso en vos", // Title for the music page
  musicGallery: [
    {
      title: "Heavenly", // Title of the song
      artist: "Cigarettes After Sex", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "The Boy Is Mine",
      artist: "Brandy, Monica",
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      left: "15%",
      top: "40%",
    },
    {
      title: "Last Night on Earth",
      artist: "Green Day",
      left: "30%",
      top: "75%",
    },
    {
      title: "American Boy",
      artist: "Estelle, Kanye West",
      left: "5%",
      top: "65%",
    },
    {
      title: "Sparks",
      artist: "Coldplay",
      left: "25%",
      top: "90%",
    },
    {
      title: "Kiss Me Thru The Phone",
      artist: "Soulja Boy, Sammie",
      left: "35%",
      top: "50%",
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "September 16, 2024", description: "Hermoso día para recordar :)" }, // Message entry
      { title: "October 1, 2024", description: "Tu primer cumpleaños juntos." },
      { title: "December 25, 2024", description: "Nuestra primera navidad ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "January 1, 2025", description: "Nuestro primer año juntas 🎉" }, // Picture entry
      { title: "February 14, 2025", description: "Nuestro primer San Valentin 💕" },
      { title: "March 16, 2025", description: "Medio año a tu lado 🤍" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Gracias, mi amor, por estos 6 meses increíbles juntos. Te amo con todo mi corazón.",
  // 🎇 Closing Page
  closingMessage: "Estoy muy feliz de tenerte en mi vida, y no veo la hora de seguir compartiendo todo lo que venga 💖", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "¿Cuánto tiempo llevamos juntos?", // Example of a correct search query
    "Cuánto tiempo llevamos juntos?", // Another example of a correct search query
  ],
};

export default config;
