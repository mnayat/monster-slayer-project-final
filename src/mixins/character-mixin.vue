<script>
import charactersData from "../data/characters-data.js";
export default {
  data() {
    return {
      charactersData: charactersData
    };
  },
  methods: {
    getHardCodedCharacterData(characterId) {
      return this.charactersData.find((x) => x.characterId === characterId);
    }
  },
  computed: {
    getHardCodedCharactersData() {
      return charactersData;
    }
  }
};
</script>
