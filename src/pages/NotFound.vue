<template>
    <div
        class="d-flex flex-column align-center justify-center text-center"
        style="height: 100vh"
    >
        <img
            src="@/assets/404.png"
            class="w-50 w-md-100"
            style="max-width: 300px;"
        >
        <h1 class="text-lg-h1 text-h2 my-10">
            Oops 😭
        </h1>
        <h2 class="text-lg-h2 text-h5">
            Parece que a página que está procurando nao existe.
        </h2>
        <v-btn
            color="primary"
            to="/"
            class="mt-15"
            size="x-large"
            rounded
        >
            Voltar para Home
        </v-btn>
    </div>
</template>