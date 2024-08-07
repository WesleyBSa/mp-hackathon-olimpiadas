package handlers

import (
	"encoding/json"
	"net/http"
	"olympics-project/internal/models"
)

func GetCountries(w http.ResponseWriter, r *http.Request) {
	apiURL := "https://apis.codante.io/olympic-games/countries"
	resp, err := http.Get(apiURL)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	var countries []models.Country
	if err := json.NewDecoder(resp.Body).Decode(&countries); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(countries)
}
