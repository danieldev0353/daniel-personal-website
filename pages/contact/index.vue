<template>
  <main class="contact">
      <SectionBody title="Contact">
        <p>If you're looking to collaborate on a project, get in touch about a position, or say hi, feel free to use the form below. I'll be in touch with you as soon as I can.</p>
      </SectionBody>
      <table>
        <tr>
          <td>E-Mail:</td>
          <td><a href="mailto:danieldev0353@outlook.com" style="color: gray;">danieldev0353@outlook.com</a></td>
        </tr>
        <tr>
          <td>Skype</td>
          <td><a href="mailto:danieldev0353@outlook.com" style="color: gray;">live:.cid.f49278d13de24556</a></td>
        </tr>
        <tr>
          <td>Telegram</td>
          <td><a href="https://t.me/deveagerbeaver53" style="color: gray;">@deveagerbeaver53</a></td>
        </tr>
        <tr>
          <td>Discord</td>
          <td><a href="https://discord.com/eagerbeaver53#2713" style="color: gray;">@eagerbeaver53#2713</a></td>
        </tr>
      </table>

      <ContactForm class="contact__form" />
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  head: {
    title: 'Daniel Evans | Contact Me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Looking to get a project done? Need a new developer on your team? Shoot me a message.'
      }
    ],
  }
}
</script>

<style lang="scss" scoped>
  .contact {
    &__form {
      width: 100%;
    }
  }
</style>