This plugin insterts contributions from GitHub service via GitHub API.

# Usage

Add plugin and it's configuration to your `book.json` file:

```
"plugins": [
  "githubcontributors"
],
"pluginsConfig": {
  "githubcontributors": {
    "githubOwner": "username",      // GitHub username e.g. sta-szek
    "githubRepository": "repo-name" // GithHub repo name e.g. pojo-tester
  }
}
```

Then you have to tell plugin, where you want the content to be inserted.
To do this use gitbook block:

```
{% GitHubContributors %}
{% endGitHubContributors %}
```

# Sample result

