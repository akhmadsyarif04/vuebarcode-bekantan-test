<template>
<div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

        <v-layout row class="mb-3">
            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-lowercase">By Project Name</span>
                </v-btn>
                <span>Sort project by project name</span>
            </v-tooltip>

            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                    <v-icon left small>person</v-icon>
                    <span class="caption text-lowercase">By Person</span>
                </v-btn>
                <span>Sort projects by person</span>
            </v-tooltip>

        </v-layout>

        <v-card flat class="pa-3" v-for="project in projects " :key="project.title">
            <v-layout row wrap :class="` pa-3 project ${project.status}`">
                <v-flex xs12 md6>
                    <div class="caption grey--text">
                        Projects Title
                    </div>
                    <div class="">
                        {{ project.title }}
                    </div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">
                        Person
                    </div>
                    <div class="">
                        {{ project.person }}
                    </div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">
                        Due By
                    </div>
                    <div class="">
                        {{ project.due }}
                    </div>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <div class="right">
                        <!-- right agar posisi menjadi kesebelah kanan -->
                        <v-chip small :class="`${project.status} white--text caption my-2`"> {{ project.status }}</v-chip>
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
import db from '@/fb'

export default {
    data() {
        return {
            projects: [],
        }
    },
    created() {
        db.collection('projects').onSnapshot(res => {
            const changes = res.docChanges();

            changes.forEach(change => {
                if (change.type === 'added')
                {
                        this.projects.push({
                            ...change.doc.data(),

                        })
                }
            })
        })
    },
    methods: {
        sortBy(prop)
        {
            this.projects.sort( (a,b) => a[prop] < b[prop] ? -1 : 1)
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
