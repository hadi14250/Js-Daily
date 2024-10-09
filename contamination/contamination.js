function contamination(text, char){
    return [...text].map((c) => char).join("")
  }

  console.log(contamination("abc", 'z'))
  