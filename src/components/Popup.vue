<template>
    <!--
        v-model="dialog" untuk menutup modal dialog ketika proses add data selesai yang mana berhubungan dengan variabel dialog
        jika false dia akan tertutup, jika true dia akan muncul
    -->
<v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" color="success">Add New Project</v-btn>
    <v-card>
        <v-card-title>
            <h2>Add a New Project</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
              <!-- // Bekantan jantan -->
                <v-text-field name="name" label="Rule" id="id" v-model="rule" prepend-icon="folder" :rules="inputRules"></v-text-field>

<!-- yang asli -->
                <!-- <v-text-field name="name" label="Title" id="id" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" name="name" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                <v-menu>
                    <v-text-field :rules="inputRules" :value="formattedDate" slot="activator" label="Due date" prepend-icon="date_range" id="id"></v-text-field>
                    <v-date-picker v-model="due"   ></v-date-picker>
                </v-menu> -->

                <!-- untuk jarak  -->
                <v-spacer></v-spacer>
                <!--
                    :loading untuk button loading ketikda proses masih berjalan.
                    nilai nya hanya true dan false
                -->
                <v-btn color="success mx-0 mt-3" @click="submit" :loading="loading">Add a Project</v-btn>
            </v-form>
        </v-card-text>

    </v-card>
</v-dialog>
</template>

<script>
// untuk mengubah format deafult date pada vuetify
// install terlebih dulu npm install date-fns
import format from 'date-fns/format'
// import db firebase
// @ adalah root pada /src
// import db from '@/fb'

// bekantan jantan
import axios from 'axios'

export default {
    data() {
        return {
            title: '',
            rule: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimun length 3 characters'
            ],
            loading: false,
            dialog: false,
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                // this.loading = true;
                //
                // const project = {
                //     title: this.title,
                //     content: this.content,
                //     due: format(this.due, 'Do MMM YYYY'),
                //     person: 'Killua',
                //     status: 'Ongoing',
                // }
                // // insert data ke firebase melalui file fb.js yang di import diatas
                // db.collection('projects').add(project).then(() => {
                //     console.log('added to db');
                //     this.loading = false;
                //     this.dialog = false;
                //     this.$emit('projectAdded'); // komunikasi ke file navbar untuk snackbar
                // })

// Bekantan jantan
                    let formData = new FormData()
                    formData.set('rule', this.rule)
                    console.log(formData)
                    axios.post('http://localhost:8000/api/v1/rules', formData)
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
    },
    computed: {
        formattedDate(){
            // untuk format date silahkan lihat pada documentasi date-fns
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
    }
}
</script>

<style lang="css" scoped>
</style>
