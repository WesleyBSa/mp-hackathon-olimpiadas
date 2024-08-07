package main

import (
	"log"
	"net/http"
	"olympics-project/internal/handlers"
)

func main() {
	http.HandleFunc("/api/countries", handlers.GetCountries)
	fs := http.FileServer(http.Dir("./web"))
	http.Handle("/", fs)

	log.Println("Server started at http://localhost:4040")
	log.Fatal(http.ListenAndServe(":4040", nil))
}
