<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card-title>確認画面</v-card-title>
    </v-row>

    <v-row justify="center">
      <v-col lg="4">
        <v-card-text>バンド名</v-card-text>
        <v-row justify="center">
          <v-card-text style="text-align: center">{{ band.name }}</v-card-text>
        </v-row>

        <v-card-text>メンバー数</v-card-text>
        <v-row justify="center">
          <v-card-text style="text-align: center">{{
            band.memberNum
          }}</v-card-text>
        </v-row>

        <v-card-text>備考</v-card-text>
        <v-row justify="center">
          <v-card-text style="text-align: center">{{ band.notes }}</v-card-text>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col lg="4">
        <v-card-subtitle>メンバー情報</v-card-subtitle>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">名前</th>
                <th class="text-left">楽器</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="member in band.memberList" :key="member.id">
                <td>{{ member.name }}</td>
                <td>{{ member.instrument }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="ms-10" lg="1">
        <v-btn class="my-10" color="primary" @click="submit">エントリー</v-btn>
      </v-col>
      <v-col class="ms-10" lg="1">
        <v-btn class="my-10" color="cancel" @click="returnToModify"
          >修正する</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

interface MemberType {
  id: number
  name: string
  instrument: string
}

interface BandType {
  name: string
  memberNum: number
  notes: string
  memberList: MemberType[]
}

export default defineComponent({
  setup(_, context: SetupContext) {
    // @ts-ignore
    const band = context.root.$route.params.band as BandType

    const submit = () => {
      const db = firebase.firestore()
      const bandCol = db.collection('bands')
      bandCol.add(band)

      context.root.$router.push({ name: 'EntryComplete' })
    }

    const returnToModify = () => {
      // eslint-disable-next-line
      const params: any = {}
      params['band'] = band
      context.root.$router.push({ name: 'EntryForm', params })
    }

    return {
      band,
      submit,
      returnToModify,
    }
  },
})
</script>
