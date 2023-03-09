
class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode()
    }


    insert(word){
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i]
            if (!(charToInsert in curr.children)) {
                curr.children[charToInsert] = new TrieNode()
            }
            curr = curr.children[charToInsert]
        }
        curr.endOfWord = true
    }
}