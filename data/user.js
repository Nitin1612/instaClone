export const data = [
  {
    user_id: 1,
    user_image: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png',
    user_name: "Your Story",
    stories: [
      {
        story_id: 1,
        story_image: "https://i.pinimg.com/236x/38/49/d0/3849d018a88e9ae71b8ab1833f1f5d50.jpg",
      },
    ]
  },
  {
    user_id: 2,
    user_image: 'https://pbs.twimg.com/profile_images/1393451192261304320/bKUpXvlc_400x400.jpg',
    user_name: "ViratKholi",
    stories: [
      {
        story_id: 1,
        story_image: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/03/30/1026805-rcbkkrlive.jpg",
      },
      ]
  },
  {
    user_id: 3,
    user_image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    user_name: "ElonMusk",
    stories: [
      {
        story_id: 1,
        story_image: "https://external-preview.redd.it/Tb9v1LBGaEWPj8GWuFORkjar1K51lYmImw7KMZSJU8Y.jpg?width=640&crop=smart&auto=webp&s=fa39e1c276eaca4ce383b366a97a2a01659e0469",
      },
      {
        story_id: 2,
        story_image: "https://qph.cf2.quoracdn.net/main-qimg-3c63bf7efee92e28ee7d1839e5cad933-lq",
      }]
  },
  {
    user_id: 4,
    user_image: 'data:image/jpeg;base64,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',
    user_name: "SilambarasanTR",
    stories: [
      {
        story_id: 1,
        story_image: "https://external-preview.redd.it/Tb9v1LBGaEWPj8GWuFORkjar1K51lYmImw7KMZSJU8Y.jpg?width=640&crop=smart&auto=webp&s=fa39e1c276eaca4ce383b366a97a2a01659e0469",
      },
      {
        story_id: 2,
        story_image: "https://qph.cf2.quoracdn.net/main-qimg-3c63bf7efee92e28ee7d1839e5cad933-lq",
      }]
  },
  {
    user_id: 5,
    user_image: 'https://www.india.com/wp-content/uploads/2018/01/dhoni1.jpg',
    user_name: "msdhoni",
    stories: [
      {
        story_id: 1,
        story_image: "https://external-preview.redd.it/Tb9v1LBGaEWPj8GWuFORkjar1K51lYmImw7KMZSJU8Y.jpg?width=640&crop=smart&auto=webp&s=fa39e1c276eaca4ce383b366a97a2a01659e0469",
      },
      {
        story_id: 2,
        story_image: "https://qph.cf2.quoracdn.net/main-qimg-3c63bf7efee92e28ee7d1839e5cad933-lq",
      }]
  },
  {
    user_id: 6,
    user_image: 'https://pbs.twimg.com/profile_images/1189494401359208448/AwbXHtpn_400x400.jpg',
    user_name: "RatanTata",
    stories: [
      {
        story_id: 1,
        story_image: "https://external-preview.redd.it/Tb9v1LBGaEWPj8GWuFORkjar1K51lYmImw7KMZSJU8Y.jpg?width=640&crop=smart&auto=webp&s=fa39e1c276eaca4ce383b366a97a2a01659e0469",
      },
      {
        story_id: 2,
        story_image: "https://qph.cf2.quoracdn.net/main-qimg-3c63bf7efee92e28ee7d1839e5cad933-lq",
      }]
  },

];