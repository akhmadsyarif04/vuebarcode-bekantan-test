<template>
<div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">



        <v-card flat class="pa-3" v-for="rule in rules " :key="rule.id">
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <div class="caption grey--text">
                        Rule
                    </div>
                    <div class="">
                        {{ rule.rule }}
                    </div>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <div class="right">
                        <!-- right agar posisi menjadi kesebelah kanan -->
                        <v-chip small> {{ rule.rule }}</v-chip>
                    </div>
                </v-flex>
            </v-layout>
            <!-- <v-divider></v-divider> -->
            <!-- membuat baris dibawah -->
        </v-card>
    </v-container>

</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            projects: [],
            rules: [],
        }
    },
    created() {
        // db.collection('projects').onSnapshot(res => {
        //     const changes = res.docChanges();
        //
        //     changes.forEach(change => {
        //         if (change.type === 'added')
        //         {
        //                 this.projects.push({
        //                     ...change.doc.data(),
        //
        //                 })
        //         }
        //     })
        // })
        this.rules_data()
    },
    mounted(){
      this.rules_data()
    },
    updated() {
      this.rules_data()
    },
    methods: {
      rules_data () {
        axios.get('http://localhost:8000/api/v1/rules')
          .then((response) => {
            let rules = response.data.rules
            this.rules = rules
            console.log(response.data.rules)
          })
          .catch((error) => {
            let responses = error.response
            console.log(responses)
          })
      }
    }
}
</script>

<style media="screen">
    .project.ongoing{
        border-left: 4px solid #3cd1c2;
    }
    .project.complete{
        border-left: 4px solid orange;
    }
    .project.overdue{
        border-left: 4px solid tomato;
    }

    .v-chip.ongoing{
        background: #3cd1c2;
    }
    .v-chip.complete{
        background: orange;
    }
    .v-chip.overdue{
        background: tomato;
    }
</style>
