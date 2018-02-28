query {
	emojis {
	    no
	    name
	    char
	    code
	}
}

query {
  relatedEmojis(keyword: "grin") {
    no
    name
    char
    code
  }
}

query {
  relatedEmojiCode(code: "FFFFF") {
    no
    name
    char
    code
  }
}

mutation {
  createNewEmoji(input: {
    code: "FFFFF",
    char: "😜",
    name: "FACE WITH STUCK-OUT TONGUE AND WINKING EYE\n≊ face with stuck-out tongue & winking eye",
    date: "2010ʲ",
    keywords: "eys"
  }) {
    no
    code
    char
    name
    keywords
  }
}

mutation {
  updateEmoji(id: 1792, input: {
    code: "FFFFF0",
    char: "😜",
    name: "FACE WITH STUCK-OUT TONGUE AND WINKING EYE\n≊ face with stuck-out tongue & winking eye",
    date: "2010ʲ",
    keywords: "eyelah"
  }) {
    no
    code
    char
    name
    keywords
  }
}

mutation {
  deleteEmoji(id: 1792) {
    no
    code
    char
    name
    keywords
  }
}
