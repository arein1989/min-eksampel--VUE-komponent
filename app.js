const app = Vue.createApp({
  data() {
      return {
          userClass: '',
      };
  },
  methods: {
    handleImageClick(clickedClass) {
      console.log(`Billedet for ${clickedClass} blev klikket`);
      alert(`Billedet for ${clickedClass} blev klikket`);
    }
  }
});

app.component('web-udvikling', {
    props: ['userClass'],
    template: `
    <div>
      <div v-if="userClass === 'Database'">
          <p>
            En database er en organiseret samling af data, der gør det muligt at gemme,
            administrere og hente information effektivt. Databaser anvendes i mange
            forskellige sammenhænge, fra små applikationer til store virksomhedssystemer.
            <img src="./images/Database.jpg" alt="database" />  
          </p>
          <div style="color:  rgb(2, 2, 57);">
            <header>
              <h1>Undervisere</h1>
            </header>
            <img @click="handleClick" class="billder" src="./images/Nilma.jpg" alt="Nilma Abbas (Database)" />
            <br />
            Nilma Abbas
          </div>
      </div>

      <div v-else-if="userClass === 'FB'">
        <p>
          Frontend refererer til den del af en hjemmeside eller applikation, som brugeren ser og 
          interagerer med. Det inkluderer alt fra layout og design til brugeroplevelse og interaktive elementer.
          Frontend-udvikling involverer typisk teknologier som HTML, CSS og JavaScript.
          <img src="./images/FB.jpg" alt="Frontend" />
        </p>
        <div style="color:  purple;">
          <header>
            <h1>Undervisere</h1>
          </header>
          <img @click="handleClick" class="billder" src="./images/Steen.png" alt="Steen Jensen (Frontend)" />
          <br />
          Steen Jensen
        </div>
      </div>

      <div v-else-if="userClass === 'UX'">
        <p>
            UX, eller brugeroplevelse, refererer til de samlede indtryk og følelser, en bruger har, 
            når de interagerer med et produkt eller en tjeneste. Dette inkluderer alt fra 
            websteder og apps til fysiske produkter.
            <img src="./images/UX.png" alt="UX" />
        </p>
        <div style="color: rgb(77, 128, 0);">
          <header>
            <h1>Undervisere</h1>
          </header>
          <img @click="handleClick" class="billder" src="./images/Miceal.jpg" alt="Michael Hammel (UX)" />
          <br />
          Michael Hammel
        </div>
      </div>
    </div>
    `,
    methods: {
      handleClick() {
        this.$emit('image-clicked', this.userClass);
      }
    }
});

app.mount('#assignment');
