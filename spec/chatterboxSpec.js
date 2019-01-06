describe('chatterbox', () => {
  it('should parse correctly and have an object named `app`', () => {
    expect(app).to.be.an('object');
  });

  describe('init', () => {
    it('should have a method called init', () => {
      expect(app.init).to.be.ok;
    });
  });

  describe('app behavior', () => {
    var fetchSpy;

    before(() => {
      fetchSpy = sinon.spy(window, 'fetch');
      app.init();
    });

    beforeEach(() => {
      fetchSpy.resetHistory();
    });

    describe('fetching', () => {
      it('should have a fetch method', () => {
        expect(app.fetch).to.be.ok;
      });

      it('should submit a GET request via window.fetch', (done) => {
        let url;

        app.fetch();
        // console.log(window.fetch.args)
        expect(window.fetch.calledOnce).to.be.true;
        if(window.fetch.args[0][0]) {
          url = window.fetch.args[0][0];
        };

        expect(url).to.equal(app.server);
        done();
      });
    });

    describe('sending', () => {
      it('should have a send method', () => {
        expect(app.send).to.be.ok;
      });

      it('should submit a POST request via window.fetch', (done) => {
        let option;

        app.send([]);
        if(window.fetch.args[0][1]) {
          option = window.fetch.args[0][1].method;
        };
        expect(option.toUpperCase()).to.equal('POST');
        expect(window.fetch.calledOnce).to.be.true;

        done();
      });

      it('should send the correct message along with the request', (done) => {
        const message = {
          username: 'Mel Brooks',
          text: 'It\'s good to be the king',
          roomname: 'lobby'
        };
        let option;

        app.send(message);
        if(window.fetch.args[0][1]) {
          option = window.fetch.args[0][1].body;
        };
        expect(JSON.parse(option)).to.deep.equal(message);
        done();
      });
    });

    describe('chatroom behavior', () => {
      it('clearMessages: should be able to clear messages from the DOM', () => {
        document.querySelector('#chats').innerHTML = '<div>not blank</div>';

        app.clearMessages();
        expect(document.querySelector('#chats').children.length).to.equal(0);
      });

      it('renderMessage: should be able to add messages to the DOM', () => {
        const message = {
          username: 'Mel Brooks',
          text: 'Never underestimate the power of the Schwartz!',
          roomname: 'lobby'
        };

        app.renderMessage(message);
        expect(document.querySelector('#chats').children.length).to.equal(1);
      });
    })
  });
});