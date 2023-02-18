package websocket

import (
	"github.com/gorilla/websocket"
	"log"
	"milkazone/internal/domain/usecase"
	"net/http"
)

type Handler struct {
	usecase  *usecase.ExcausterUseCase
	upgrader *websocket.Upgrader
}

var Conns = make(map[*websocket.Conn]bool)

func NewHandler(u *usecase.ExcausterUseCase) *Handler {
	return &Handler{
		usecase: u,
		upgrader: &websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				return true

			},
		},
	}
}

func (h *Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/ws" {
		h.ws(w, r)
	} else if r.URL.Path == "/info" && r.Method == http.MethodGet {
		h.info(w, r)
	}

}

func (h *Handler) ws(w http.ResponseWriter, r *http.Request) {
	c, err := h.upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print(err)
	}

	Conns[c] = true

}

func (h *Handler) info(w http.ResponseWriter, r *http.Request) {

}

func WriteWS(data []byte) {
	for c := range Conns {
		c.WriteMessage(websocket.TextMessage, data)
	}
}
