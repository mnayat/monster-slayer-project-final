<script>
export const getCharacterInfo = (character, classType) => {
      return character.find((x) => x.characterId === classType)
     
    }
</script>